const axios = require('axios')

class UnisenderApi {
    constructor() {
        this.host = axios.create({
            baseURL: process.env.UNISENDER_API_URL
        })

        const requestInterceptor = config => {
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

        if(!campaign_id) {
            /* TODO обработка ошибки */
            return false
        }

        const response = await this.host.get('/async/getCampaignDeliveryStats', {params: {campaign_id}})

        console.log(response.data)

        if(response.data.error) {
            /* TODO обработка ошибки */
            return false
        }

        return response.data.result
    }

    /**
     * Статус залачи
     * https://www.unisender.com/ru/support/api/statistics/getcampaigndeliverystats/#task
     * @param {string} task_uuid
     * @returns {Promise<boolean|*>}
     */
    async getTaskResult(task_uuid) {
        if(!task_uuid) {
            /* TODO обработка ошибки */
            return false
        }

        const response = await this.host.get('/async/getTaskResult', {params: {task_uuid}})

        console.log(response.data.error)
        if(response.data.error) {
            /* TODO обработка ошибки */
            return false
        }

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
}

module.exports = new UnisenderApi()