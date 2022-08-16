const LongReadService = require('../service/LongReadService')

class LongReadController {
    getStatistic = async (req, res) => {
        let {dateFrom, dateTo, eventId, directionId} = req.body

        const longRead = new LongReadService()

        let longReadItems = []

        if(eventId)
            longReadItems = await longRead.getLongReadItemsByEventId(eventId, directionId)
        else
            longReadItems = await longRead.getLongReadItemsByDate(dateFrom, dateTo, directionId)

        return res.json(longRead.collectStatistic(longReadItems))
    }
}

module.exports = new LongReadController()
