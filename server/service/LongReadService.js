const {Op} = require('sequelize')
const {LongRead, User, UserFields, MedDirections} = require('../models')

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
    reReadingUserIds= []
    cityIndexList = {}
    cityUserCounts = []
    medDirectionIndexList = {}
    directionUserCounts = [{name: 'Не выбрано', count: 0}]

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
     * @returns {Promise<Model[]>}
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
     * @returns {Promise<Model[]>}
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

        longReadItems.forEach(item => {
            if(this.isReReading(item.UF_USER))
                result.reReadings++

            this.indexCityUserCounts(item.b_user.PERSONAL_CITY, item.UF_USER)
            this.indexDirectionUserCounts(item.b_user.b_uts_user.med_direction, item.UF_USER)

            if(item.UF_ESTIMATION !== 'a:0:{}')
                result.tests[0]++

            if(item.UF_TEST !== 'a:0:{}')
                result.tests[1]++

            if(item.UF_VIEWED_VIDEO)
                result.videos[0]++

            this.userIds.push(item.UF_USER)
        })

        this.directionUserCounts.sort((a, b) => {
            return b.count - a.count
        })

        this.cityUserCounts.sort((a, b) => {
            return b.count - a.count
        })

        let count = 0;

        this.directionUserCounts.forEach(item => count += item.count)

        result.direction = this.directionUserCounts.slice(0, 5)
        result.cities = this.cityUserCounts.slice(0, 5)
        result.userIds = this.userIds

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

    indexCityUserCounts(cityName, userId) {
        const cityIndex = this.cityIndexList[cityName]

        if(typeof cityIndex !== 'undefined')
            this.cityUserCounts[cityIndex].count++
        else
            this.cityIndexList[cityName] = this.cityUserCounts.push({name: cityName, count: 1}) - 1

        return true
    }

    indexDirectionUserCounts(direction, userId) {
        const medDirectionIndex = direction ? this.medDirectionIndexList[direction.UF_NAME] : false

        if(medDirectionIndex === false)
            this.directionUserCounts[0].count++
        else if(!medDirectionIndex)
            this.medDirectionIndexList[direction.UF_NAME] = this.directionUserCounts.push({name: direction.UF_NAME, count: 1}) - 1
        else
            this.directionUserCounts[medDirectionIndex].count++
    }
}

module.exports = LongReadService
