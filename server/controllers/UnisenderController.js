const UnisenderApi = require('../api/UnisenderApi')
const UserService = require('../services/UserService')

class UnisenderController {
    async getCampaigns(req, res, next) {
        try {
            let {dateFrom, dateTo, limit, page} = req.query

            dateFrom = new Date(+dateFrom)
            dateTo = new Date(+dateTo)

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

    async getLists(req, res, next) {
        try {
            const contactLists = await UnisenderApi.getLists()

            return res.json(contactLists)
        } catch (error) {
            next(error)
        }
    }

    async deleteList(req, res, next) {
        try {
            const {listId} = req.body

            const result = await UnisenderApi.deleteList(listId)

            return res.json(result)
        } catch (error) {
            next(error)
        }
    }

    async createList(req, res, next) {
        try {
            const {title} = req.body

            const result = await UnisenderApi.createList(title)

            return res.json(result)
        } catch (error) {
            next(error)
        }
    }

    async importContacts(req, res, next) {
        try {
            const {eventId, directionId, userGroup, limit, page, listId} = req.body

            const userService = new UserService()
            const users = await userService.getMedUsers({eventId, directionId, userGroup}, limit, page)
            const formData = userService.getUsersFormDataForUnisender(users.rows, listId)
            const result = await UnisenderApi.importContacts(formData)

            result.usersCount = users.count

            return res.json(result)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new UnisenderController()