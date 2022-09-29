import {authHost, host} from './Main'

class UserApi {
    async getStatistic(filter) {
        try {
            const statistic = await authHost.get('/api/user/statistic', {params: filter})

            return {success: true, data: statistic.data}
        } catch (error) {
            return {success: false, message: error.message, status: error.status}
        }
    }

    async get(limit = 25, page = 1) {
        try {
            const response = await authHost.get('/api/user', {params: {limit, page}})

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }

    async getMedUsers(filter, limit, page) {
        try {
            if(!filter.eventId)
                delete filter.eventId

            if(!filter.directionId)
                delete filter.directionId

            if(!filter.userGroup)
                delete filter.userGroup

            const response = await authHost.get('/api/user/med-users', {params: {...filter, limit, page}})

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }

    async getUsersCountByGroups(filter) {
        try {
            const response = await authHost.get('/api/user/usersCountByGroups', {params: filter})

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }

    async getGroups() {
        try {
            const response = await authHost.get('/api/user/groups')

            return response.data
        } catch (error) {
            return false
        }
    }

    async create(data) {
        try {
            const response = await authHost.post('/api/user', data)

            return {success: true, data: response.data}
        } catch (error) {
            return  {success: false, message: error.message}
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

    async logout() {
        try {
            const response = await authHost.get('/api/user/logout')

            return {success: true}
        } catch (error) {
            return  {success: false, message: error.message}
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

    async delete(userIds) {
        try {
            const response = await authHost.delete('/api/user', {data: {userIds}})

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }
}

export default new UserApi()
