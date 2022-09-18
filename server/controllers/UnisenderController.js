const UnisenderApi = require('../api/UnisenderApi')

class UnisenderController {
    async getCampaigns(req, res, next) {
        try {
            let {dateFrom, dateTo, limit, page} = req.query

            dateFrom = new Date(dateFrom)
            dateTo = new Date(dateTo)

            const campaigns = await UnisenderApi.getCampaigns(dateFrom, dateTo, limit, page)

            return res.json(campaigns)
        } catch (error) {
            next(error)
        }
    }

    async getCampaignDeliveryStats(req, res, next) {
        try {
            const {campaignId} = req.query

            const task = await UnisenderApi.getCampaignDeliveryStats(campaignId)

            return res.json(task)
        } catch (error) {
            next(error)
        }
    }

    async getTaskResult(req, res, next) {
        try {
            const {uuid} = req.query
            const taskResult = await UnisenderApi.getTaskResult(uuid)

            return res.json(taskResult)
        } catch (error) {
            next(error)
        }
    }

    async getStatisticFromFile(req, res, next) {
        try {
            const {fileUrl} = req.query

            const fileContent = await UnisenderApi.getStatisticFromFile(fileUrl)

            return res.json(fileContent)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new UnisenderController()