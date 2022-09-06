const {Waves} = require('../models')
const VisitsService = require('../services/VisitsService')
const EventsService = require('../services/EventsService')
const LongReadService = require('../services/LongReadService')

class WavesService {
    async getAll(limit = 10, page = 1) {
        const wavesList = await Waves.findAndCountAll({
            attributes: [['ID', 'id'], ['UF_NAME', 'name'], ['UF_VISIT_PLAN', 'visitPlan'], ['UF_EVENT_PLAN', 'eventPlan'], ['UF_LONG_READ_PLAN', 'longReadPlan']],
            limit,
            offset: (page-1)*limit
        })

        const visitPlanIds = []
        const eventPlanIds = []
        const longReadPlanIds = []

        const serializedWaves = wavesList.rows.map(wave => {
            wave = wave.toJSON()

            visitPlanIds.push(wave.visitPlan)
            eventPlanIds.push(wave.eventPlan)
            longReadPlanIds.push(wave.longReadPlan)

            return wave
        })

        const visitsService = new VisitsService()
        const visitPlansList = await visitsService.getPlansById(visitPlanIds)

        const serializedVisitPlans = {}
        visitPlansList.rows.forEach(visitPlan => {
            serializedVisitPlans[visitPlan.id] = visitPlan
        })

        const eventsService = new EventsService()
        const eventPlansList = await eventsService.getPlansByIds(eventPlanIds)

        const serializedEventPlans = {}
        eventPlansList.rows.forEach(eventPlan => {
            serializedEventPlans[eventPlan.id] = eventPlan
        })

        const longReadService = new LongReadService()
        const longReadPlansList = await longReadService.getPlansByIds(longReadPlanIds)

        const serializedLongReadPlans = {}
        longReadPlansList.rows.forEach(longReadPlan => {
            serializedLongReadPlans[longReadPlan.id] = longReadPlan
        })

        const result = {count: wavesList.count, rows: []}

        result.rows = serializedWaves.map(wave => {
            wave.visitPlan = serializedVisitPlans[wave.visitPlan]
            wave.eventPlan = serializedEventPlans[wave.eventPlan]
            wave.longReadPlan = serializedLongReadPlans[wave.longReadPlan]

            return wave
        })

        return result
    }

    /**
     * Создать план
     * @param {string} name
     * @param {number} visitPlanId
     * @param {number} eventPlanId
     * @param {number} longReadPlanId
     * @return {Promise<Waves>}
     */
    async createWave(name, visitPlanId, eventPlanId, longReadPlanId) {
        return await Waves.create({
            UF_NAME: name,
            UF_VISIT_PLAN: visitPlanId,
            UF_EVENT_PLAN: eventPlanId,
            UF_LONG_READ_PLAN: longReadPlanId
        })
    }

    /**
     * Удалить волну
     * @param {number} id
     * @return {Promise<Waves>}
     */
    async deleteWave(id) {
        return await Waves.destroy({
            where: {
                ID: id
            }
        })
    }
}

module.exports = WavesService
