const EventService = require('../services/EventsService')

class EventsController {
    async getAll(req, res) {
        return res.json(await EventService.getAll())
    }

    async getStatistic(req, res, next) {
        try {
            let {dateFrom, dateTo, eventId, directionId} = req.query
            const eventsService = new EventService()
            dateFrom = new Date(dateFrom)
            dateTo = new Date(dateTo)

            return res.json(await eventsService.getStatistic(dateFrom, dateTo, directionId, eventId))
        } catch (error) {
            next(error)
        }
    }

    async getPromotionStatistic(req, res, next) {
        try {
            let {dateFrom, dateTo, eventId, directionId} = req.query

            const eventsService = new EventService()
            dateFrom = new Date(dateFrom)
            dateTo = new Date(dateTo)

            return res.json(await eventsService.getPromotionStatistic(dateFrom, dateTo, directionId, eventId))
        } catch (error) {
            next(error)
        }
    }

    async getVisitsCount(req, res) {
        const {eventId} = req.body

        const eventService = new EventService()

        return res.json(await eventService.getTotalVisitsByEventId(eventId))
    }

    async getViewsGteMin(req, res) {
        let {dateFrom, dateTo, eventId, directionId, minutes} = req.query

        if(!minutes)
            return res.status(400).json({message: 'minutes is undefined'})

        const eventsService = new EventService()
        return res.json(await eventsService.getViewsGteMin(dateFrom, dateTo, eventId, directionId, minutes))
    }

    async getEventPlans(req, res) {
        let {dateFrom, dateTo, limit, page} = req.query

        dateFrom = new Date(dateFrom)
        dateTo = new Date(dateTo)

        const eventsService = new EventService()

        return res.json(await eventsService.getPlansByDate(dateFrom, dateTo, +limit, +page))
    }

    async getEventPlansForSelector(req, res) {
        const eventsService = new EventService()
        return res.json(await eventsService.getPlansForSelector())
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

        const eventsService = new EventService()

        return res.json(await eventsService.createPlan(name, start, end, plan))
    }

    async deletePlan(req, res) {
        const {id} = req.query

        const eventsService = new EventService()

        return res.json(await eventsService.deletePlan(id))
    }

    async getEventVisits(req, res, next) {
        try {
            const {eventId} = req.query

            const eventService = new EventService()
            const result = await eventService.getEventVisits(eventId)

            return res.json(result)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new EventsController()
