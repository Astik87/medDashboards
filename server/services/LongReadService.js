const {Op} = require('sequelize')

const {LongRead, User, UserFields, MedDirections} = require('../models')
const DirectionService = require('./DirectionsService')
const CitiesService = require('./CitiesService')

/**
 * Статистика LongRead
 */
class LongReadService {

    request = {}

    longReadAttributes = ['UF_USER', 'UF_ESTIMATION', 'UF_VIEWED_VIDEO', 'UF_TEST']
    userAttributes = ['PERSONAL_CITY']
    medDirectionAttributes = ['UF_NAME']
    userFieldsAttributes = [['UF_DIRECTION', 'UF_DIRECTION']]
    order = [['UF_USER', 'DESC']]

    userIds = []

    constructor() {
        this.request = {
            attributes: this.longReadAttributes,
            order: this.order,
            include: {
                attributes: this.userAttributes,
                model: User,
                required: true,
                include: {
                    attributes: this.userFieldsAttributes,
                    model: UserFields,
                    include: {
                        attributes: this.medDirectionAttributes,
                        model: MedDirections,
                    }
                }
            }
        }
    }

    /**
     * Получить статистику по id меропричтия
     * @param {number} eventId id меропричтия
     * @param {number} directionId id мед. напрвления
     * @returns {Promise<LongRead[]>}
     */
    async getLongReadItemsByEventId(eventId, directionId) {
        this.request.where = {
            UF_USER: {[Op.ne]: 0},
            UF_EVENT: eventId
        }

        if(directionId) {
            this.request.include.include.where = {UF_DIRECTION: directionId}
            this.request.include.include.required = true
        }

        return await LongRead.findAll(this.request)
    }

    /**
     * Получить статистику за период от dateFrom до dateTo
     * @param {string|Date} dateFrom "2020-12-31 00:00:00+00:00"
     * @param {string|Date} dateTo "2020-12-31 23:59:00+00:00"
     * @param {number} directionId id мед. направления
     * @returns {Promise<LongRead[]>}
     */
    async getLongReadItemsByDate(dateFrom, dateTo, directionId) {
        this.request.where = {
            UF_USER: {[Op.ne]: 0},
            UF_CONNECT_TIME: {
                [Op.gte]: dateFrom,
                [Op.lte]: dateTo
            }
        }

        if(directionId) {
            this.request.include.include.where = {UF_DIRECTION: directionId}
            this.request.include.include.required = true
        }

        return await LongRead.findAll(this.request)
    }

    /**
     * Получить фейковую статистику, заполненную из админки для партнеров (по фильтрам даты)
     * @param {string} dateFrom
     * @param {string} dateTo
     * @param {number} directionId
     * @param {number} userId id портнера
     * @return {Promise<{readings: number, tests: number[], reReadings: number, videos: number[], transitions: number, cities: [{}], directions: [{}]}>}
     */
    async getFakeStatisticByDate(dateFrom, dateTo, directionId, userId) {
        /* TODO Получить фейковую статистику, заполненную из админки для партнеров (по фильтрам даты) */
    }

    /**
     * Получить фейковую статистику, заполненную из админки для партнеров (по id мероприятия)
     * @param {number} eventId
     * @param {number} directionId
     * @param {number} userId id партнера
     * @return {Promise<{readings: number, tests: number[], reReadings: number, videos: number[], transitions: number, cities: [{}], directions: [{}]}>}
     */
    async getFakeStatisticEventId(eventId, directionId, userId) {
        /* TODO Получить фейковую статистику, заполненную из админки для партнеров (по id мероприятия) */
    }

    /**
     * Создать фейковую стстистику для портнеров
     * @param {string} date Дата статистики (2022-12-31 23:59:00+00:00)
     * @param {number} eventId id мероприятия стстистики
     * @param {number} userId id партнера
     * @param {number} directionId id направления
     * @param {{readings: number, tests: number[], reReadings: number, videos: number[], transitions: number, cities: [{}]}} statistic данные статистики
     * @return {Promise<boolean>}
     */
    async addFakeStatistic(date, eventId, directionId, userId, statistic) {
        /* TODO Создать фейковую стстистику для портнеров */
    }

    /**
     * Собирает статистику из массива longReadItems
     * @param longReadItems данные из getLongReadItemsByDate или getLongReadItemsByEventId
     * @returns {{readings: number, tests: number[], reReadings: number, videos: number[], transitions: number, cities: [{}], directions: [{}]}}
     */
    collectStatistic(longReadItems) {
        const result = {
            readings: longReadItems.length,
            reReadings: 0,
            transitions: 0,
            tests: [0, 0],
            videos: [0]
        }

        const directionsForStatistic = DirectionService.getDirectionsForStatistic()
        const citiesForStatistic = CitiesService.getCitiesForStatistic()

        longReadItems.forEach(item => {
            if(this.isReReading(item.UF_USER))
                result.reReadings++


            if(item.b_user.b_uts_user.med_direction) {
                const directionName = item.b_user.b_uts_user.med_direction.UF_NAME
                directionsForStatistic.indexValue(directionName)
            }

            citiesForStatistic.indexValue(item.b_user.PERSONAL_CITY)

            if(item.UF_ESTIMATION !== 'a:0:{}')
                result.tests[0]++

            if(item.UF_TEST !== 'a:0:{}')
                result.tests[1]++

            if(item.UF_VIEWED_VIDEO)
                result.videos[0]++

            this.userIds.push(item.UF_USER)
        })

        result.direction = directionsForStatistic.getStatisticResult()
        result.cities = citiesForStatistic.getStatisticResult()

        return result
    }

    /**
     * Перечитывал ли пользователь LongRead
     * @param {number} userId
     * @returns {boolean}
     */
    isReReading(userId) {
        return this.userIds.indexOf(userId) !== -1
    }
}

module.exports = LongReadService