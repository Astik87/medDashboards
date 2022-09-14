import {host} from './Main'
import {getDateForFilter} from "@utils/DateUtils";

class UserApi {
    async getStatistic(filter) {
        try {
            filter = getDateForFilter(filter)
            const statistic = await host.get('/api/user/statistic', {params: filter})

            return {success: true, data: statistic.data}
        } catch (error) {
            return {success: false, message: error.message, status: error.status}
        }
    }

    async login(login, password) {
        try {
            const response = await host.post('/api/user/login', {login, password}, {withCredentials: true})

            const {data} = response
            localStorage.setItem('accessToken', 'Bearer '+data.accessToken)
            return {success: true, data}
        } catch (error) {
            let {message} = error

            if(error.response.data && error.response.data.message)
                message = error.response.data.message

            return {success: false, message}
        }
    }

    async check() {
        try {
            const response = await host.get('/api/user/refresh', {withCredentials: true})

            const {accessToken} = response.data
            localStorage.setItem('accessToken', 'Bearer ' + accessToken)

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false}
        }
    }
}

export default new UserApi()
