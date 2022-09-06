const LongReadService = require('../services/LongReadService')

class LongReadController {
    async getStatistic(req, res) {
        let {dateFrom, dateTo, eventId, directionId} = req.query

        const longRead = new LongReadService()

        let longReadItems = []

        if(eventId)
            longReadItems = await longRead.getLongReadItemsByEventId(eventId, directionId)
        else
            longReadItems = await longRead.getLongReadItemsByDate(dateFrom, dateTo, directionId)

        return res.json(longRead.collectStatistic(longReadItems))
    }

    async getPlans(req, res) {
        const {dateFrom, dateTo, limit, page} = req.query

        const longReadService = new LongReadService()

        return res.json(await longReadService.getPlansByDate(new Date(dateFrom), new Date(dateTo), +limit, +page))
    }

    async getPlansForSelector(req, res) {
        const longReadService = new LongReadService()
        return res.json(await longReadService.getPlansForSelector())
    }

    async createPlan(req, res) {
        let {name, start, end, plan} = req.body

        if(name.length < 3)
            return res.status(400).json({message: 'Название не может быть меньше 3 символов'})

        start = new Date(start)
        end = new Date(end)

        if(!start.getTime() || !end.getTime())
            return res.status(400).json({message: 'Дата начала невалидна'})

        if(!end.getTime())
            return res.status(400).json({message: 'Дата окончания невалидна'})

        if(end <= start)
            return res.status(400).json({message: 'Дата окончания не может быть меньше даты начала'})

        if(plan <= 0)
            return res.status(400).json({message: 'План не может быть меньше либо равен 0'})

        const longReadService = new LongReadService()

        return res.json(await longReadService.createPlan(name, start, end, plan))
    }

    async deletePlan(req,res) {
        const {id} = req.query
        const longReadService = new LongReadService()

        return res.json(await longReadService.deletePlan(id))
    }
}

module.exports = new LongReadController()
