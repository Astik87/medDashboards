const {Op} = require('sequelize')

const {VisitPlans, VisitStatistic, IBlockElement, IBlockElementProperty, User} = require('../models')

class VisitsService {

    /**
     * Получить список планов
     * @param {Date} dateFrom
     * @param {Date} dateTo
     * @param {number} limit максимальное кол-ва элементов
     * @param {number} page номер страницы
     */
    static async getPlansByDate(dateFrom, dateTo, limit = 10, page = 1) {

        /**
         * Планы из базы
         * @type {VisitPlans[]}
         */
        let visitPlans = await VisitPlans.findAndCountAll({
            attributes: [['ID', 'id'], ['UF_START_DATE', 'start'], ['UF_END_DATE', 'end'], ['UF_NAME', 'name'], ['UF_PLAN', 'plan']],
            where: {
                UF_START_DATE: {
                    [Op.gte]: dateFrom,
                    [Op.lte]: dateTo
                }
            },
            order: [['UF_START_DATE', 'ASC']],
            limit: limit,
            offset: (page-1)*limit
        })

        let visitsDateFrom = new Date()
        let visitsDateTo = visitsDateFrom

        // Приводим все записи в json и устанавливаем минимальную и максимальную дату начала и окончания
        visitPlans.rows = visitPlans.rows.map((plan) => {
            plan = plan.toJSON()

            plan.start = new Date(plan.start)
            plan.end = new Date(plan.end)

            if (plan.start < visitsDateFrom)
                visitsDateFrom = plan.start

            if (plan.end > visitsDateTo)
                visitsDateTo = plan.end

            return plan
        })

        /**
         * Все визиты из базы
         * @type {IBlockElement[]}
         */
        const dbVisitsList = await IBlockElement.findAll({
            attributes: [['ID', 'id'], ['ACTIVE_FROM', 'time']],
            where: {
                ACTIVE_FROM: {
                    [Op.gte]: visitsDateFrom,
                    [Op.lte]: visitsDateTo
                },
            },
            include: [
                {
                    attributes: [['IBLOCK_PROPERTY_ID', 'id'], ['VALUE', 'value']],
                    where: {
                        IBLOCK_PROPERTY_ID: {
                            [Op.in]: [169, 170, 172]
                        }
                    },
                    model: IBlockElementProperty,
                    required: true
                },
                {
                    attributes: [['UF_NUMBER', 'status']],
                    model: VisitStatistic,
                },
            ]
        })

        const visitsList = []

        const visitUserIdsList = {}
        const userIds = []

        /** Объект с симвальными кодами свойств визита вид {id_свойства: симальный_код}
         * @type {}
         */
        const visitPropertiesList = {
            169: 'doctor',
            170: 'medicalRepresentative',
            172: 'telemarketer'
        }

        // Преобразуем визиты из базы в удобный для работы формат
        // Записываем свойства визита по их символьным кодом вместо id
        // Собираем id телемаркетологов, докторов и мед. представителей
        dbVisitsList.forEach((dbVisit) => {
            dbVisit = dbVisit.toJSON()

            if (!dbVisit.b_iblock_element_properties)
                return

            let visitProperties = dbVisit.b_iblock_element_properties

            const visit = {
                time: dbVisit.time,
                ...dbVisit.visits_log
            }

            const visitIndex = visitsList.push(visit) - 1

            visitProperties.forEach(({id, value}) => {
                const propertyCode = visitPropertiesList[id]

                if (userIds.indexOf(value) === -1)
                    userIds.push(value)

                visit[propertyCode] = value

                if (visitUserIdsList[value])
                    visitUserIdsList[value][visitIndex] = propertyCode
                else
                    visitUserIdsList[value] = {[visitIndex]: propertyCode}

            })
        })

        /**
         * Телемаркетологи, доктора и мед. представители которые участвовали в визитах
         * @type {User[]}
         */
        const users = await User.findAll({
            attributes: [['ID', 'id'], ['NAME', 'name']],
            where: {
                ID: {
                    [Op.in]: userIds
                }
            }
        })

        // Добавляем в визиты телемаркетологов, докторов и мед. представителей которые участвовали в визите
        users.forEach((user) => {
            user = user.toJSON()

            const visitIndexes = visitUserIdsList[user.id]

            for (const visitIndex in visitIndexes) {
                const propertyCode = visitIndexes[visitIndex]
                visitsList[visitIndex][propertyCode] = user
            }
        })

        /**
         * Подсчет статистики и группировка их по планам
         */
        visitPlans.rows.forEach((plan) => {
            plan.fact = 0
            plan.telemarketers = [{name: 'Не указан', doctors: []}]
            const telemarketerIndexes = {}
            visitsList.forEach((visit) => {
                if (visit.time > plan.end || visit.time < plan.start)
                    return false

                if(visit.medicalRepresentative) {
                    const telemarketerIndex = visit.telemarketer ? telemarketerIndexes[visit.telemarketer.id] : 0

                    if(typeof telemarketerIndex === 'undefined')
                        telemarketerIndexes[telemarketerIndex] = plan.telemarketers.push({name: visit.telemarketer.name, doctors: [{name: visit.medicalRepresentative.name, status: visit.status}]}) - 1
                    else
                        plan.telemarketers[telemarketerIndex].doctors.push({name: visit.medicalRepresentative.name, status: visit.status})
                }


                if(visit.status)
                    plan.fact++

            })
        })

        return visitPlans
    }
}

module.exports = VisitsService
