const DirectionsService = require('../services/DirectionsService')

class DirectionsController {
    getAll = async (req, res) => {
        return res.json(await DirectionsService.getAll())
    }
}

module.exports = new DirectionsController()
