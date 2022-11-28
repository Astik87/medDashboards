const {Op} = require('sequelize')
const sequelize = require('../db')

const {
    LongReadStatistics,
    LongReadTests,
    LongReadViewingVideos,
    LongReadPlans,
    User,
    UserFields,
    MedDirections,
    Waves
} = require('../models')
const DirectionService = require('./DirectionsService')
const CitiesService = require('./CitiesService')

/**
 * Статистика LongRead
 */
class LongReadService {

    request = {}

    longReadAttributes = ['ID', 'UF_USER']
    userAttributes = ['PERSONAL_CITY']
    medDirectionAttributes = ['UF_NAME']
    userFieldsAttributes = [['UF_DIRECTION', 'UF_DIRECTION']]
    order = [['UF_USER', 'DESC']]

    userIds = []

    constructor() {
        this.request = {
            attributes: this.longReadAttributes,
            order: this.order,
            include: [
                {
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
                },
                {
                    model: LongReadViewingVideos
                },
                {
                    model: LongReadTests
                }
            ]
        }
    }

    /**
     * Получить статистику по id меропричтия
     * @param {number} eventId id меропричтия
     * @param {number} directionId id мед. напрвления
     * @param {string} longReadType
     * @returns {Promise<LongRead[]>}
     */
    async getLongReadItemsByEventId(eventId, directionId, longReadType) {
        this.request.where = {
            UF_USER: {[Op.ne]: 0},
            UF_EVENT: eventId
        }

        if(directionId) {
            this.request.include.include.where = {UF_DIRECTION: directionId}
            this.request.include.include.required = true
        }

        if(longReadType)
            this.request.where.UF_PAGE_NAME = longReadType

        return await LongReadStatistics.findAll(this.request)
    }

    /**
     * Получить статистику за период от dateFrom до dateTo
     * @param {string|Date} dateFrom "2020-12-31 00:00:00+00:00"
     * @param {string|Date} dateTo "2020-12-31 23:59:00+00:00"
     * @param {number} directionId id мед. направления
     * @param {string} longReadType
     * @returns {Promise<LongRead[]>}
     */
    async getLongReadItemsByDate(dateFrom, dateTo, directionId, longReadType) {
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

        if(longReadType)
            this.request.where.UF_PAGE_NAME = longReadType

        return await LongReadStatistics.findAll(this.request)
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
            tests: [],
            videos: []
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

            if(item.long_read_viewing_videos.length) {
                let foundVideo = false
                item.long_read_viewing_videos.forEach(longReadVideo => {
                    result.videos = result.videos = result.videos.map(video => {
                        if(video.name !== longReadVideo.UF_NAME)
                            return video

                        video.count++
                        foundVideo = true

                        return video
                    })

                    if(!foundVideo)
                        result.videos.push({name: longReadVideo.UF_NAME, count: 1})
                })
            }

            if(item.long_read_tests.length) {
                item.long_read_tests.forEach(longReadTest => {
                    let foundTest = false
                    result.tests = result.tests.map(test => {
                        if(test.name !== longReadTest.UF_NAME)
                            return test

                        test.count++
                        foundTest = true
                        return test
                    })

                    if(!foundTest)
                        result.tests.push({name: longReadTest.UF_NAME, count: 1})
                })
            }

            this.userIds.push(item.UF_USER)
        })

        result.direction = directionsForStatistic.getStatisticResult()
        result.cities = citiesForStatistic.getStatisticResult()

        return result
    }

    async getLongReadTypes() {
        return await LongReadStatistics.findAll({
            attributes: [
                [sequelize.fn('DISTINCT', sequelize.col('UF_PAGE_NAME')), 'type']
            ]
        })
    }

    /**
     * Перечитывал ли пользователь LongRead
     * @param {number} userId
     * @returns {boolean}
     */
    isReReading(userId) {
        return this.userIds.includes(userId)
    }

    /**
     * Получить планы по зфпросу query
     * @param {{}} query sequelize query
     * @return {Promise<{count: number, rows: [{id: number, name: string, start: Date, end: Date, plan: number, fact: number}]}>}
     */
    async getPlansByQuery(query) {
        const plans = await LongReadPlans.findAndCountAll({
            attributes: [['ID', 'id'], ['UF_NAME', 'name'], ['UF_START_DATE', 'start'], ['UF_END_DATE', 'end'], ['UF_PLAN', 'plan']],
            ...query
        })

        let plansStart = new Date()
        let plansEnd = new Date()

        const serializedPlans = plans.rows.map(plan => {
            plan = plan.toJSON()

            plan.start = new Date(plan.start)
            plan.end = new Date(plan.end)

            if(plan.start < plansStart)
                plansStart = plan.start

            if(plan.end > plansEnd)
                plansEnd = plan.end

            return plan
        })

        const longReadViewer = await LongReadStatistics.findAll({
            attributes: [['UF_CONNECT_TIME', 'connectionTime']],
            where: {
                UF_CONNECT_TIME: {
                    [Op.gte]: plansStart,
                    [Op.lte]: plansEnd
                }
            },
            order: [['UF_CONNECT_TIME', 'asc']]
        })

        const result = {count: plans.count, rows: []}

        result.rows = serializedPlans.map(plan => {
            plan.fact = 0
            longReadViewer.forEach(view => {
                view = view.toJSON()

                view.connectionTime = new Date(view.connectionTime)

                if(view.connectionTime > plan.end)
                    return false

                if (view.connectionTime >= plan.start)
                    plan.fact++
            })

            return plan
        })

        return result
    }

    /**
     * Получить планы по дате
     * @param {Date} dateFrom
     * @param {Date} dateTo
     * @param {number} limit
     * @param {number} page
     * @return {Promise<{count: number, rows: {id: number, name: string, start: Date, end: Date, plan: number, fact: number}[]}>}
     */
    async getPlansByDate(dateFrom, dateTo, limit = 10, page = 1) {
        const longReadPlansQuery = {
            where: {
                UF_START_DATE: {
                    [Op.gte]: dateFrom,
                    [Op.lte]: dateTo
                }
            },
            limit,
            offset: (page-1) * limit
        }

        return await this.getPlansByQuery(longReadPlansQuery)
    }

    /**
     * Получить планы по их id
     * @param {number} planIds
     * @return {Promise<void>}
     */
    async getPlansByIds(planIds) {
        const longReadPlansQuery = {
            where: {
                ID: {
                    [Op.in]: planIds
                }
            }
        }

        return await this.getPlansByQuery(longReadPlansQuery)
    }

    async getPlansForSelector() {
        return await LongReadPlans.findAll({
            attributes: [['UF_NAME', 'label'], ['ID', 'value']]
        })
    }

    /**
     * Создать новый план
     * @param {string} name
     * @param {Date} start
     * @param {Date} end
     * @param {number} plan
     */
    async createPlan(name, start, end, plan) {
        return await LongReadPlans.create({
            UF_NAME: name,
            UF_START_DATE: start,
            UF_END_DATE: end,
            UF_PLAN: plan
        })
    }

    /**
     * Удалить план
     * @param {number} id
     * @return {Promise<*>}
     */
    async deletePlan(id) {
        Waves.destroy({
            where: {
                UF_LONG_READ_PLAN: id
            }
        })

        return await LongReadPlans.destroy({
            where: {
                ID: id
            }
        })
    }
}

module.exports = LongReadService
