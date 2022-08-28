import {hostWithFilter} from './Main'

class VisitsApi {
    async getPlans(filter, page, limit) {
        try {
            const response = await hostWithFilter.post('/api/visits/get-plans', {...filter, limit, page})

            return {success: true, plans: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }
}

export default new VisitsApi()
