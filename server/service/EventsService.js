const DateService = require("./DateService");
const FaceCastApi = require('../api/FaceCastApi')

const {Op} = require('sequelize')

const {IBlockSections, EventRegistrations, UserFields, MedDirections, User, IBlockSectionFields} = require('../models')

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
    async calcStatisticByVisitsList(visitsList, dateFrom= false, dateTo= false) {
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
        const cityIndexesList = {}
        const directionIndexesList = {}

        const storedInFaceCast = (new Date().getTime() - dateFrom.getTime())/1000/60/60/24 < 178

        for(let visitsIndex in visitsList) {
            const visit = visitsList[visitsIndex].toJSON()
            res.viewingDepth += visit.viewing

            if(statisticByDate.period === 'hours' && storedInFaceCast) {
                const translationId = visit.b_iblock_section.b_uts_iblock_9_section.translationId

                if(translationId && !faceCastStatisticsList[translationId]) {
                    const faceCastStatistic = await faceCastApi.getVisitHistogramAbsoluteTimeAll(translationId)
                    if(!faceCastStatistic.success)
                        return false

                    faceCastStatisticsList[translationId] = faceCastStatistic.data
                }

                if(visit.translationKey
                    && translationId
                    && faceCastStatisticsList[translationId]
                    && faceCastStatisticsList[translationId][visit.translationKey]) {
                    let currTime = false
                    faceCastStatisticsList[translationId][visit.translationKey].forEach(({time, is_live}) => {
                        // if(!is_live)
                        //     return false

                        time = new Date(time)
                        if(currTime && currTime.getHours() === time.getHours())
                            return false

                        currTime = time
                        statisticByDate.indexValue(time)
                    })
                }
            } else {
                const connectionDate = new Date(visit.connectionDate)
                statisticByDate.indexValue(connectionDate)
            }

            const userDirection = visit.b_user.b_uts_user.med_direction
            const directionIndex = userDirection ? directionIndexesList[userDirection.directionName] : 0
            if(typeof directionIndex === 'undefined')
                directionIndexesList[userDirection.directionName] = res.directions.push({name: userDirection.directionName, count: 1}) - 1
            else
                res.directions[directionIndex].count++

            const cityIndex = cityIndexesList[visit.b_user.userCity]
            if(typeof cityIndex === 'undefined')
                cityIndexesList[visit.b_user.userCity] = res.cities.push({name: visit.b_user.userCity, count: 1}) - 1
            else
                res.cities[cityIndex].count++
        }

        if(!res.directions[0].count)
            res.directions = res.directions.slice(1)

        res.cities = res.cities.sort((a, b) => b.count - a.count).slice(0, 5)
        res.directions = res.directions.sort((a, b) => b.count - a.count).slice(0, 5)

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

        if(eventId)
            where.eventRegistrations.UF_EVENT = eventId

        if(directionId)
            where.userFields.UF_DIRECTION = directionId

        const visitsList = await this.getEventRegistrations(where, attributes)

        return await this.calcStatisticByVisitsList(visitsList, dateFrom, dateTo)
    }

    /**
     * Получить количество посетителей по id мероприятий
     * @param {[number]} eventIds
     * @return {Promise<[{name: string, total: number, date: string}]>}
     */
    async getTotalVisitsByEventIds(eventIds) {
        /* TODO Получить количество посетителей по id мероприятий */
    }

    /**
     * Получить количество пользователей смотревших мероприятие больше значения minutes
     * @param dateFrom
     * @param dateTo
     * @param directionId
     * @param minutes Временой интервал просмотра мероприятия
     * @return {Promise<number>}
     */
    async getVisitorsCountByDate(dateFrom, dateTo, directionId, minutes) {
        /* TODO Получить количество пользователей смотревших мероприятие больше значения minutes */
    }
}

module.exports = EventsService
