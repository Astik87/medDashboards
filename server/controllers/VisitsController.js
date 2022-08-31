const VisitsService = require('../service/VisitsService')

class VisitsController {
    static async getPlans(req, res) {
        let {dateFrom, dateTo, page, limit} = req.body

        dateFrom = new Date(dateFrom)
        dateTo = new Date(dateTo)

        if(!page)
            page = 1

        if(!limit)
            limit = 10

        return res.json(await VisitsService.getPlansByDate(dateFrom, dateTo, limit, page))
    }

    static async createPlan(req, res) {
        let {name, start, end, plan} = req.body

        if(!start || !end || !name || !plan)
            return res.status(400).json({message: 'Поля имя, план, дата начала и дата окончания являются обязательными'})

        start = new Date(start)
        end = new Date(end)

        console.log(end)

        if(start > end)
            return res.status(400).json({message: 'Дата начала не может быть больше даты окончания'})

        const visitsService = new VisitsService()

        if(!start.getTime())
            return res.status(400).json({message: 'Дата начала не валидна'})

        if(!end.getTime())
            return res.status(400).json({message: 'Дата окончания не валидна'})

        return res.json(await visitsService.createPlan(name, start, end, plan))
    }
}

module.exports = VisitsController
