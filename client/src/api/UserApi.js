import {hostWithFilter} from './Main'

class UserApi {
    async getStatistic(filter) {
        try {
            const statistic = await hostWithFilter.post('/api/user/statistic', filter)

            return {success: true, data: statistic.data}
        } catch (error) {
            return {success: false, hostWithFilter: error.message, status: error.status}
        }
    }
}

export default new UserApi()
