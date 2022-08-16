const EventService = require('../service/EventsService')

class EventsController {
    getAll = async (req, res) => {
        return res.json(await EventService.getAll())
    }
}

module.exports = new EventsController()
