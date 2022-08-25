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
}

module.exports = new EventsController()
