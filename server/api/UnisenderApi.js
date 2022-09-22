const axios = require('axios')
const ApiError = require('../utils/ApiError')

class UnisenderApi {
    constructor() {
        this.host = axios.create({
            baseURL: process.env.UNISENDER_API_URL
        })

        const requestInterceptor = config => {
            if(!config.params)
                config.params = {}

            config.params.api_key = process.env.UNISENDER_API_KEY
            return config
        }

        const responseInterceptor = response => {
            return response
        }

        const responseErrorInterceptor = error => {
            if(error.response.data && error.response.data.error)
                error.message = error.response.data.error

            throw error
        }

        this.host.interceptors.request.use(requestInterceptor)

        this.host.interceptors.response.use(responseInterceptor, )
    }

    /**
     *
     * @param {Date} date
     * @returns {string}
     */
    formatDate(date) {
        const year = date.getFullYear()
        let month = date.getMonth()+1
        let day = date.getDate()
        let hours = date.getHours()
        let minutes = date.getMinutes()

        if(month < 10)
            month = '0' + month.toString()

        if(day < 10)
            day = '0' + day.toString()

        if(hours < 10)
            hours = '0' + hours.toString()

        if(minutes < 10)
            minutes = '0' + minutes.toString()

        return `${year}-${month}-${day} ${hours}:${minutes}`
    }

    /**
     * Получить список рассылок
     * https://www.unisender.com/ru/support/api/statistics/getcampaigns/
     * @param {Date} dateFrom
     * @param {Date} dateTo
     * @param {number} limit
     * @param {number} page
     * @returns {Promise<{result: [{}]}>}
     */
    async getCampaigns(dateFrom, dateTo, limit, page) {
        const date_from = this.formatDate(dateFrom)
        const date_to = this.formatDate(dateTo)

        const request = {
            date_from,
            date_to
        }

        if(limit || page) {
            if(!limit)
                limit = 100

            if(!page)
                page = 1

            request.limit = limit
            request.offset = (page-1)*limit
        }

        const response = await this.host.get('/getCampaigns', {params: request})

        if(response.data.error)
            throw ApiError.BadRequest(response.data.error)

        return response.data
    }

    /**
     * Запустит сбот ститстики по рассылки
     * https://www.unisender.com/ru/support/api/statistics/getcampaigndeliverystats/
     * @param {number} campaign_id
     * @returns {Promise<void>}
     */
    async getCampaignDeliveryStats(campaign_id) {

        // return {
        //     "task_uuid": "027cde16-372f-11ed-ae48-8a164c4ce964",
        //     "status": "new"
        // }

        if(!campaign_id)
            throw ApiError.BadRequest('campaign_id is required')

        const response = await this.host.get('/async/getCampaignDeliveryStats', {params: {campaign_id}})

        if(response.data.error)
            throw ApiError.BadRequest(response.data.error)

        return response.data.result
    }

    /**
     * Статус залачи
     * https://www.unisender.com/ru/support/api/statistics/getcampaigndeliverystats/#task
     * @param {string} task_uuid
     * @returns {Promise<boolean|*>}
     */
    async getTaskResult(task_uuid) {
        if(!task_uuid)
            throw ApiError.BadRequest('task_uuid is required')

        const response = await this.host.get('/async/getTaskResult', {params: {task_uuid}})

        if(response.data.error)
            throw ApiError.BadRequest(response.data.error)

        return response.data.result
    }

    /**
     * Получить контенет csv файла статистики
     * @param {string} fileUrl
     * @returns {Promise<*>}
     */
    async getStatisticFromFile(fileUrl) {
        const response = await this.host.get(fileUrl, {params: {}, contentType: 'text'})

        return response.data
    }

    /**
     * Получить список контактов
     * https://www.unisender.com/ru/support/api/contacts/getlists/
     * @returns {Promise<[{id: number, title: string}]>}
     */
    async getLists() {
        const response = await this.host.get('/getLists')

        if(response.data.error)
            throw ApiError.BadRequest(response.data.error)

        return response.data.result
    }

    /**
     * Создвть список контактов
     * https://www.unisender.com/ru/support/api/contacts/createlist/
     * @returns {Promise<{}>}
     */
    async createList(title) {
        if(!title)
            throw ApiError.BadRequest('title is required')

        const response = await this.host.get('/deleteList', {params: {title}})

        if(response.data.error)
            throw ApiError.BadRequest(response.data.error)

        return response.data.result
    }

    /**
     * Удалить список контактов
     * https://www.unisender.com/ru/support/api/contacts/deletelist/
     * @returns {Promise<{}>}
     */
    async deleteList(list_id) {
        if(!list_id)
            throw ApiError.BadRequest('listId is required')

        const response = await this.host.get('/deleteList', {params: {list_id}})

        if(response.data.error)
            throw ApiError.BadRequest(response.data.error)

        return response.data.result
    }
}

module.exports = new UnisenderApi()
