const {EventPlans, VisitPlans, LongReadPlans} = require('../models')
const WavesService = require('../services/WavesService')

class WavesController {
    async getWaves(req, res) {
        const {limit, page} = req.query

        const wavesService = new WavesService()
        return res.json(await wavesService.getAll(+limit, +page))
    }

    async createWave(req, res) {
        const {name, visitPlanId, eventPlanId, longReadPlanId} = req.body

        if(name.length < 3)
            return res.status(400).json({message: 'Название не может быть меньше 3 символов'})

        if(visitPlanId) {
            const visitPlan = await VisitPlans.findOne({where: {ID: visitPlanId}})
            if(!visitPlan)
                return res.status(400).json({message: `План визитов с id ${visitPlanId} не найден`})
        }

        if(eventPlanId) {
            const eventPlan = await EventPlans.findOne({where: {ID: eventPlanId}})
            if(!eventPlan)
                return res.status(400).json({message: `План мероприятий с id ${eventPlanId} не найден`})
        }

        if(longReadPlanId) {
            const longReadPlan = await LongReadPlans.findOne({where: {ID: longReadPlanId}})
            if(!longReadPlan)
                return res.status(400).json({message: `План LongRead'а с id ${longReadPlanId} не найден`})
        }

        const wavesService = new WavesService()
        return res.json(await wavesService.createWave(name, visitPlanId, eventPlanId, longReadPlanId))
    }
}

module.exports = new WavesController()
