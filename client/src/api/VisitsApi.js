import {host, hostWithFilter} from './Main'

class VisitsApi {

    /**
     * Получить список планов
     * @param {{}} filter
     * @param {number} page
     * @param {number} limit
     * @return {Promise<{success: boolean, plans: any}|{success: boolean, message: *}>}
     */
    async getPlans(filter, page, limit) {
        try {
            const response = await hostWithFilter.get('/api/visits/plans', {params: {...filter, limit, page}})

            return {success: true, plans: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }

    /**
     * Массив планов мероприятий для react-select
     * @return {Promise<{success: boolean, message: *}|{data: [{label: string, value: number}], success: boolean}>}
     */
    async getPlansForSelector() {
        try {
            const response = await host.get('/api/visits/plans/for-selector')

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }

    /**
     * Создать план
     * @param {string} name
     * @param {Date} start
     * @param {Date} end
     * @param {number} plan
     * @return {Promise<{success: boolean, message: string}>}
     */
    async createPlan(name, start, end, plan) {
        try {
            const response = await host.post('/api/visits/plans', {name, start, end, plan})

            return {success: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }
}

export default new VisitsApi()
