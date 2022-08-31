const EventService = require('../service/EventsService')

class EventsController {
    getAll = async (req, res) => {
        return res.json(await EventService.getAll())
    }

    getStatistic = async (req, res) => {
        let {dateFrom, dateTo, eventId, directionId} = req.body
        const eventsService = new EventService()
        dateFrom = new Date(dateFrom)
        dateTo = new Date(dateTo)

        return res.json(await eventsService.getStatistic(dateFrom, dateTo, directionId, eventId))
    }

    getVisitsCount = async (req, res) => {
        const {eventId} = req.body

        const eventService = new EventService()

        return res.json(await eventService.getTotalVisitsByEventId(eventId))
    }

    getViewsGteMin = async (req, res) => {
        let {dateFrom, dateTo, eventId, directionId, minutes} = req.body

        if(!minutes)
            return res.status(400).json({message: 'minutes is undefined'})

        const eventsService = new EventService()
        return res.json(await eventsService.getViewsGteMin(dateFrom, dateTo, eventId, directionId, minutes))
    }
}

module.exports = new EventsController()
