import {host, hostWithFilter} from "@api/Main";

/**
 * API для статистики LongRead
 */
class LongReadApi {
    /**
     * Получить статистику LongRead
     * @param {{dateFrom: string, dateTo: string, eventId: number, directionId: number}} filter
     * @returns {Promise<{success: boolean, message: string}|{data: {}, success: boolean}>}
     */
    async getStatistic(filter) {
        try {
            const statistic = await hostWithFilter.get('/api/long-read/statistic', {params: filter})

            return {success: true, data: statistic.data}
        } catch (error) {
            return {success: false, message: error.message, status: error.status}
        }
    }

    /**
     *
     * @param {{year: number, month: number, day: number}} filter
     * @param {number} limit
     * @param {number} page
     * @return {Promise<
     *                  {success: boolean, message: string}
     *                  |
     *                  {success: boolean, data: {
     *                      count: number,
     *                      rows: [{
     *                              name: string,
     *                              start: string,
     *                              end: string,
     *                              plan: number,
     *                              fact: number}
     *                          ]}}>}
     */
    async getPlans(filter, limit, page) {
        try {
            const response = await hostWithFilter.get('/api/long-read/plans', {params: {...filter, limit, page}})

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }

    async getPlansForSelector() {
        try {
            const response = await host.get('/api/long-read/plans/for-selector')

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }

    /**
     * Создать новый план
     * @param {string} name
     * @param {number} start Date TimeStamp
     * @param {number} end Date TimeStamp
     * @param {number} plan
     * @return {Promise<{success: boolean, message: *}|{data: {}, success: boolean}>}
     */
    async createPlans(name, start, end, plan) {
        try {
            const response = await host.post('/api/long-read/plans', {name, start, end, plan})

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }
}

export default new LongReadApi()
