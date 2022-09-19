const {Op} = require('sequelize')

const {
    IBlockSections,
    EventRegistrations,
    UserFields,
    MedDirections,
    User,
    IBlockSectionFields,
    EventPlans,
    Waves
} = require('../models')

const DateService = require("./DateService");
const FaceCastApi = require('../api/FaceCastApi')
const DirectionsService = require('./DirectionsService')
const CitiesService = require('./CitiesService')

class EventsService {
    static EventsIBlockId = process.env.EVENTS_IBLOCK_ID
    baseEventRegistrationsRequest = {}

    constructor() {
        this.baseEventRegistrationsRequest = {
            attributes: [['UF_VIDTIME', 'viewing'], ['UF_DATE_CONNECTION', 'connectionDate']],
            include: [
                {
                    attributes: [['ID', 'eventId'], ['NAME', 'eventName']],
                    model: IBlockSections,
                    required: true
                },
                {
                    attributes: [['ID', 'userId'], ['PERSONAL_CITY', 'userCity']],
                    model: User,
                    required: true,
                    include: {
                        attributes: [['UF_DIRECTION', 'directionId']],
                        model: UserFields,
                        required: true,
                        include: {
                            attributes: [['UF_NAME', 'directionName']],
                            model: MedDirections,
                        }
                    }
                }
            ]
        }
    }

    /**
     * Получить запрос к таблице "Регистрация на мероприятия"
     * @param {{
     *     eventRegistrations: {},
     *     users: {},
     *     userFields: {}
     * }} where
     * @param {{
     *          eventRegistrations: [string|[string]],
     *          event: [string|[string]],
     *          user: [string|[string]],
     *          userFields: [string|[string]],
     *          direction: [string|[string]]}
     *        } attributes столбца таблиц
     */
    async getEventRegistrations(where, attributes) {
        const request = this.baseEventRegistrationsRequest

        request.where = where.eventRegistrations
        request.attributes = attributes.eventRegistrations
        request.include.push({
            attributes: attributes.event,
            model: IBlockSections,
            required: true,
            include: {
                attributes: [['UF_TRANSLATION', 'translationId']],
                model: IBlockSectionFields,
            }
        })

        request.include.push({
            attributes: attributes.user,
            where: where.users,
            model: User,
            required: true,
            include: {
                attributes: attributes.userFields,
                model: UserFields,
                where: where.userFields,
                required: true,
                include: {
                    attributes: attributes.direction,
                    model: MedDirections,
                }
            }
        })

        return await EventRegistrations.findAll(request)
    }

    /**
     * Получить все мероприятия
     * @return {Promise<IBlockSections[]>}
     */
    static async getAll() {
        return await IBlockSections.findAll({
            attributes: [['ID', 'id'], ['NAME', 'name']],
            where: {IBLOCK_ID: EventsService.EventsIBlockId}
        })
    }

    /**
     * Плучить список мкроприятий по фильтру даты
     * @param {Date} dateFrom
     * @param {Date} dateTo
     * @param {[{events: string | string[], eventFields: string | string[]}]} attributes
     * @return {Promise<IBlockSections[] | boolean>}
     */
    async getAllByDate(dateFrom, dateTo, attributes) {
        if (!dateFrom || !dateTo)
            return false

        return await IBlockSections.findAll({
            attributes: attributes.events,
            include: {
                attributes: attributes.eventFields,
                model: IBlockSectionFields,
                required: true,
                where: {
                    UF_START: {
                        [Op.gte]: dateFrom,
                    },
                    UF_END: {
                        [Op.lte]: dateTo
                    }
                }
            }
        })

    }

    /**
     * Посчитать статистику по массиву визитов
     * @param {Date|boolean} dateFrom
     * @param {Date|boolean} dateTo
     * @param {EventRegistrations[]} visitsList
     * @return {Promise<{
     *          total: number,
     *          viewingDepth: number,
     *          uniqueViewers: [{label: string, value: number}],
     *          cities: [{name: string, count: number}],
     *          directions: [{name: string, count: number}]
     *         }>}
     */
    async calcStatisticByVisitsList(visitsList, dateFrom = false, dateTo = false) {
        const res = {
            total: visitsList.length,
            viewingDepth: 0,
            uniqueViewers: [],
            directions: [{name: 'Не указан', count: 0}],
            cities: []
        }

        const faceCastApi = new FaceCastApi()
        const statisticByDate = DateService.getDatesForStatisticByPeriod(dateFrom, dateTo)

        const faceCastStatisticsList = {}
        const storedInFaceCast = (new Date().getTime() - dateFrom.getTime()) / 1000 / 60 / 60 / 24 < 178

        const directionsServiceForStatistic = DirectionsService.getDirectionsForStatistic()
        const citiesServiceForStatistic = CitiesService.getCitiesForStatistic()

        for (let visitsIndex in visitsList) {
            const visit = visitsList[visitsIndex].toJSON()
            res.viewingDepth += visit.viewing

            if (statisticByDate.period === 'hours' && storedInFaceCast) {
                const translationId = visit.b_iblock_section.b_uts_iblock_9_section.translationId

                if (translationId && !faceCastStatisticsList[translationId]) {
                    const faceCastStatistic = await faceCastApi.getVisitHistogramAbsoluteTimeAll(translationId)
                    if (!faceCastStatistic.success)
                        continue

                    faceCastStatisticsList[translationId] = faceCastStatistic.data
                }

                if (visit.translationKey
                    && translationId
                    && faceCastStatisticsList[translationId]
                    && faceCastStatisticsList[translationId][visit.translationKey]) {
                    let currTime = false
                    faceCastStatisticsList[translationId][visit.translationKey].forEach(({time, is_live}) => {
                        // if(!is_live)
                        //     return false

                        time = new Date(time)
                        if (currTime && currTime.getHours() === time.getHours())
                            return false

                        currTime = time
                        statisticByDate.indexValue(time)
                    })
                }
            } else {
                const connectionDate = new Date(visit.connectionDate)
                statisticByDate.indexValue(connectionDate)
            }

            const directionName = visit.b_user.b_uts_user.med_direction ? visit.b_user.b_uts_user.med_direction.directionName : false
            directionsServiceForStatistic.indexValue(directionName)
            citiesServiceForStatistic.indexValue(visit.b_user.userCity)

        }

        if (!res.directions[0].count)
            res.directions = res.directions.slice(1)

        res.cities = citiesServiceForStatistic.getStatisticResult()
        res.directions = directionsServiceForStatistic.getStatisticResult()

        res.viewingDepth = !res.total ? 0 : (res.viewingDepth / res.total).toFixed()

        res.uniqueViewers = statisticByDate.getResStatistic()

        return res
    }

    /**
     * Получить статистику определенного мероприятия
     * @param {Date} dateFrom
     * @param {Date} dateTo
     * @param {number} eventId id мероприятия
     * @param {number} directionId id направления
     * @return {Promise<{
     *          total: number,
     *          viewingDepth: number,
     *          uniqueViewers: [{label: string, value: number}],
     *          cities: [{name: string, count: number}],
     *          directions: [{name: string, count: number}]
     *         }>}
     */
    async getStatistic(dateFrom, dateTo, directionId, eventId) {
        const attributes = {
            eventRegistrations: [['UF_VIDTIME', 'viewing'], ['UF_DATE_CONNECTION', 'asd'], ['UF_DATE_CONNECTION', 'connectionDate'], ['UF_KEY', 'translationKey']],
            event: [['ID', 'eventId'], ['NAME', 'eventName']],
            user: [['ID', 'userId'], ['PERSONAL_CITY', 'userCity']],
            userFields: [['UF_DIRECTION', 'directionId']],
            direction: [['UF_NAME', 'directionName']]
        }
        const where = {
            eventRegistrations: {
                UF_DATE_CONNECTION: {
                    [Op.gte]: dateFrom,
                    [Op.lte]: dateTo
                }
            },
            users: {},
            userFields: {},
        }

        if (eventId)
            where.eventRegistrations.UF_EVENT = eventId

        if (directionId)
            where.userFields.UF_DIRECTION = directionId

        const visitsList = await this.getEventRegistrations(where, attributes)

        return await this.calcStatisticByVisitsList(visitsList, dateFrom, dateTo)
    }

    /**
     * Получить количество посетителей по id мероприятия
     * @param {number} eventId
     * @return {Promise<{count: number, event: {name: string, date: string}}>}
     */
    async getTotalVisitsByEventId(eventId) {
        let event = await IBlockSections.findOne({
            attributes: [['ID', 'id'], ['NAME', 'name']],
            where: {
                ID: eventId
            },
            include: {
                attributes: [['UF_START', 'date']],
                model: IBlockSectionFields
            }
        })

        event = event.toJSON()

        const visitsCount = await EventRegistrations.count({
            where: {
                UF_EVENT: eventId
            }
        })

        return {
            id: event.id,
            name: event.name,
            date: event.b_uts_iblock_9_section.date,
            count: visitsCount
        }
    }

    /**
     * Получить количество пользователей смотревших мероприятие больше значения minutes
     * @param {Date} dateFrom
     * @param {Date} dateTo
     * @param {number} eventId
     * @param {number} directionId
     * @param {number} minutes Временой интервал просмотра мероприятия
     * @return {Promise<number>}
     */
    async getViewsGteMin(dateFrom, dateTo, eventId, directionId, minutes) {
        const query = {
            where: {
                UF_DATE_CONNECTION: {
                    [Op.ne]: null
                },
                UF_VIDTIME: {
                    [Op.gte]: minutes
                }
            }
        }

        if (dateFrom && dateTo) {
            query.where.UF_DATE_CONNECTION = {
                [Op.gte]: dateFrom,
                [Op.lte]: dateTo
            }
        }

        if (eventId)
            query.where.UF_EVENT = eventId

        if (directionId) {
            query.include = {
                model: UserFields,
                required: true,
                where: {
                    UF_DIRECTION: directionId
                }
            }
        }

        return await EventRegistrations.count(query)
    }

    /**
     * Получить планы мероприятий
     * @param {{}} query Sequelize query
     * @return {Promise<[{name: string, start: Date, end: Date, plan: number, fact: number}]>}
     */
    async getPlans(query) {
        const eventPlans = await EventPlans.findAndCountAll({
            attributes: [['ID', 'id'], ['UF_NAME', 'name'], ['UF_START_DATE', 'start'], ['UF_END_DATE', 'end'], ['UF_PLAN', 'plan']],
            order: [['UF_START_DATE', 'asc']],
            ...query
        })

        let startDate = new Date()
        let endDate = new Date()

        const serializedEventPlans = eventPlans.rows.map((plan) => {
            plan = plan.toJSON()

            plan.start = new Date(plan.start)
            plan.end = new Date(plan.end)

            if (plan.end > endDate)
                endDate = plan.end

            if (plan.start < startDate)
                startDate = plan.start

            return plan
        })

        const eventsList = await IBlockSections.findAll({
            attributes: [['NAME', 'name'], ['ID', 'id']],
            include: [
                {
                    attributes: [['UF_START', 'start'], ['UF_END', 'end']],
                    model: IBlockSectionFields,
                    required: true,
                    where: {
                        UF_START: {
                            [Op.gte]: startDate
                        },
                        UF_END: {
                            [Op.lte]: endDate
                        }
                    }
                },
                {
                    attributes: ['UF_EVENT'],
                    model: EventRegistrations
                }
            ],
            order: [[{model: IBlockSectionFields, as: 'IBlockSectionFields'}, 'UF_END', 'asc']]
        })

        const result = {count: eventPlans.count, rows: []}
        result.rows = serializedEventPlans.map(plan => {
            plan.fact = 0
            eventsList.forEach(event => {
                event = event.toJSON()

                const eventEnd = new Date(event.b_uts_iblock_9_section.end)

                if (eventEnd > plan.end)
                    return false

                const eventStart = new Date(event.b_uts_iblock_9_section.start)
                if (eventStart > plan.start)
                    plan.fact += event.event_registries.length
            })

            return plan
        })

        return result
    }

    /**
     * Получить планы мероприятий по дате
     * @param {Date} dateFrom
     * @param {Date} dateTo
     * @param {number} limit
     * @param {number} page
     * @return {Promise<{name: string, start: Date, end: Date, plan: number, fact: number}[]>}
     */
    async getPlansByDate(dateFrom, dateTo, limit = 10, page = 1) {
        const eventPlansQuery = {
            UF_START_DATE: {
                [Op.gte]: dateFrom,
                [Op.lte]: dateTo
            },
            limit,
            offset: (page-1)*limit
        }

        return await this.getPlans(eventPlansQuery)
    }

    /**
     * Получить планы мероприятий по их id
     * @param {[number]} planIds
     * @return {Promise<{name: string, start: Date, end: Date, plan: number, fact: number}[]>}
     */
    async getPlansByIds(planIds) {
        const eventPlansQuery = {
            where: {
                ID: {
                    [Op.in]: planIds
                }
            }
        }

        return await this.getPlans(eventPlansQuery)
    }

    getPlansForSelector() {
        return EventPlans.findAll({
            attributes: [['UF_NAME', 'label'], ['ID', 'value']]
        })
    }

    /**
     * Создать новый план мероприятий
     * @param {string} name
     * @param {Date} start
     * @param {Date} end
     * @param {number} plan
     * @return {Promise<EventPlans>}
     */
    async createPlan(name, start, end, plan) {
        return await EventPlans.create({
            UF_NAME: name,
            UF_START_DATE: start,
            UF_END_DATE: end,
            UF_PLAN: plan
        })
    }

    /**
     * Удалить план
     * @param {number} id
     * @return {Promise<void>}
     */
    async deletePlan(id) {
        Waves.destroy({
            where: {
                UF_EVENT_PLAN: id
            }
        })

        await EventPlans.destroy({
            where: {
                ID: id
            }
        })
    }

    /**
     * Получить список пользователей зарегистрированных на мероприятие и время просмотра
     * @param {number} eventId
     * @returns {Promise<{}>} Объект в котором ключ - email пользователь, занчение - время просмотра мероприятия
     */
    async getEventVisits(eventId) {
        const visitsList = await EventRegistrations.findAll({
            attributes: [['UF_VIDTIME', 'viewingTime'], ['UF_UTM_SOURCE', 'utm']],
            where: {
                UF_EVENT: eventId
            },
            include: {
                attributes: [['LOGIN', 'email']],
                model: User
            }
        })

        const result = {}

        visitsList.forEach(visit => {
            visit = visit.toJSON()

            if(!visit.b_user || !visit.b_user.email)
                return false

            result[visit.b_user.email] = {viewingTime: visit.viewingTime, utm: visit.utm}
        })

        return result
    }
}

module.exports = EventsService
