const VisitsService = require('../service/VisitsService')

class VisitsController {
    static async getPlans(req, res) {
        let {dateFrom, dateTo} = req.body

        dateFrom = new Date(dateFrom)
        dateTo = new Date(dateTo)

        return res.json(await VisitsService.getPlansByDate(dateFrom, dateTo))
    }
}

module.exports = VisitsController
