import {host} from './Main'

class UserApi {
    async getStatistic(filter) {
        try {
            const statistic = await host.post('/api/user/statistic', filter)

            return {success: true, data: statistic.data}
        } catch (error) {
            return {success: false, message: error.message, status: error.status}
        }
    }
}

export default new UserApi()
