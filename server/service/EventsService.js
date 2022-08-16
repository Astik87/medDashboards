const {IBlockSections} = require('../models')

class EventsService {
    static EventsIBlockId = process.env.EVENTS_IBLOCK_ID

    async getAll() {
        return await IBlockSections.findAll({
            attributes: [['ID', 'id'], ['NAME', 'name']],
            where: {IBLOCK_ID: EventsService.EventsIBlockId}
        })
    }
}

module.exports = new EventsService()
