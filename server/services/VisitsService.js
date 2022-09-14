const {Op} = require('sequelize')

const {
    VisitPlans,
    VisitStatistic,
    IBlockElement,
    IBlockElementProperty,
    User,
    UserFields,
    MedDirections,
    Waves,
} = require('../models')

class VisitsService {

    /**
     * Получить список планов по дате
     * @param {Date} dateFrom
     * @param {Date} dateTo
     * @param {number} limit максимальное кол-ва элементов
     * @param {number} page номер страницы
     */
    async getPlansByDate(dateFrom, dateTo, limit = 10, page = 1) {

        /**
         * Планы из базы
         * @type {VisitPlans[]}
         */
        const visitPlansQuery = {
            where: {
                UF_START_DATE: {
                    [Op.gte]: dateFrom,
                    [Op.lte]: dateTo
                }
            },
            limit: limit,
            offset: (page - 1) * limit
        }

        return await this.getPlans(visitPlansQuery)
    }

    /**
     * Получить список планов по их id
     * @param {[number]} planIds
     * @return {Promise<VisitPlans[]>}
     */
    async getPlansById(planIds) {
        return await this.getPlans({where: {ID: {[Op.in]: planIds}}})
    }

    /**
     * Получить список планов
     * @param {{}} query Sequelize query object
     * @return {Promise<VisitPlans[]>}
     */
    async getPlans(query) {
        /**
         * Планы из базы
         * @type {VisitPlans[]}
         */
        let visitPlans = await VisitPlans.findAndCountAll({
            attributes: [['ID', 'id'], ['UF_START_DATE', 'start'], ['UF_END_DATE', 'end'], ['UF_NAME', 'name'], ['UF_PLAN', 'plan']],
            order: [['UF_END_DATE', 'DESC']],
            ...query
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
         * @type {{}}
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
            },
            include: {
                attributes: [['UF_DIRECTION', 'direction']],
                model: UserFields,
                include: {
                    attributes: [['UF_NAME', 'name']],
                    model: MedDirections,
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
            plan.planned = 0
            plan.telemarketers = [{name: 'Не указан', visits: [], conducted: 0, total: 0}]
            const telemarketerIndexes = {}
            visitsList.forEach((visit) => {
                if (visit.time > plan.end || visit.time < plan.start)
                    return false

                if (visit.medicalRepresentative) {
                    const telemarketerIndex = visit.telemarketer ? telemarketerIndexes[visit.telemarketer.id] : 0

                    let doctorName = 'Не указан'
                    let doctorDirection = 'Не указан'

                    if(visit.doctor) {
                        doctorName = visit.doctor.name

                        if(visit.doctor.b_uts_user && visit.doctor.b_uts_user.med_direction)
                            doctorDirection = visit.doctor.b_uts_user.med_direction.name
                    }

                    if (typeof telemarketerIndex === 'undefined') {
                        telemarketerIndexes[visit.telemarketer.id] = plan.telemarketers.push({
                            name: visit.telemarketer.name,
                            total: 1,
                            conducted: visit.status,
                            visits: [{name: visit.medicalRepresentative.name, status: visit.status, time: visit.time, doctor: doctorName, doctorDirection}]
                        }) - 1
                    } else {
                        plan.telemarketers[telemarketerIndex].visits.push({
                            name: visit.medicalRepresentative.name,
                            status: visit.status,
                            time: visit.time,
                            doctor: doctorName,
                            doctorDirection
                        })

                        plan.telemarketers[telemarketerIndex].total++
                        if (visit.status)
                            plan.telemarketers[telemarketerIndex].conducted++
                    }
                    plan.planned++
                }

                if (visit.status)
                    plan.fact++
            })

            if (!plan.telemarketers[0].total)
                plan.telemarketers = plan.telemarketers.slice(1)
        })

        return visitPlans
    }

    async getPlansForSelector() {
        return await VisitPlans.findAll({
            attributes: [['UF_NAME', 'label'], ['ID', 'value']]
        })
    }

    /**
     * Создать новый план
     * @param {string} name
     * @param {Date} start
     * @param {Date} end
     * @param {number} plan
     * @return {boolean}
     */
    async createPlan(name, start, end, plan) {
        try {
            await VisitPlans.create({
                UF_NAME: name,
                UF_PLAN: plan,
                UF_START_DATE: start,
                UF_END_DATE: end
            })

            return true
        } catch (error) {
            return false
        }
    }

    /**
     * Удалить план
     * @param {number} id
     * @return {Promise<void>}
     */
    async deletePlan(id) {
        Waves.destroy({
            where: {
                UF_VISIT_PLAN: id
            }
        })

        return await VisitPlans.destroy({
            where: {
                ID: id
            }
        })
    }
}

module.exports = VisitsService
