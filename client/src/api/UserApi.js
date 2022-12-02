import {authHost, host} from './Main'
import UserState from "@/state/UserState";

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

    /**
     * Получить список пользователей
     * @param {{eventId: [number], directionId: number}} filter
     * @param {number} limit
     * @param {number} page
     * @param {boolean|{field: 'id'|'email'|'name'|'directionName', sort: 'asc'|'desc'}} sort
     * @returns {Promise<{success: boolean, message: *}|{data: any, success: boolean}>}
     */
    async getMedUsers(filter, limit, page, sort = false) {
        try {
            if(!filter.eventId)
                delete filter.eventId

            if(!filter.directionId)
                delete filter.directionId

            if(!filter.userGroup)
                delete filter.userGroup

            if(!sort || !sort.field || !sort.sort)
                sort = false

            const response = await authHost.get('/api/user/med-users', {params: {...filter, limit, page, sort}})

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }

    async getNmoCodes(filter, limit, page, sort = false) {
        try {
            if(!filter.eventId)
                delete filter.eventId

            if(!filter.directionId)
                delete filter.directionId

            const response = await authHost.get('/api/user/nmo-codes', {params: {...filter, limit, page, sort}})

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

    /**
     * Проставляет коды НМО пользователям из массива usersList
     * @param {{email: string, nmo: string}[]} usersList
     * @returns {Promise<{success: boolean, message: string}|{data: {errors: string[]}, success: boolean}>}
     */
    async importNMO(usersList) {
        if(!usersList || !usersList.length)
            return {success: false, message: 'usersList is required'}

        try {
            const response = await authHost.post('/api/user/import-nmo', {usersList})

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }

    /**
     * Удалить коды НМО
     * @param {number[]} codeIds
     * @returns {Promise<{success: boolean, message: *}|{data: any, success: boolean}>}
     */
    async deleteNmoCodes(codeIds) {
        try {
            const response = await authHost.delete('/api/user/delete-nmo-codes', {data: {codeIds}})

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }

    /**
     * Create user
     * @param {{name: string, login: string, password: string, accesses: string[], isAdmin: boolean}} data
     * @returns {Promise<{success: boolean, message: *}|{data: any, success: boolean}>}
     */
    async create(data) {
        try {
            const response = await authHost.post('/api/user', data)

            return {success: true, data: response.data}
        } catch (error) {
            return  {success: false, message: error.message}
        }
    }

    /**
     * Авторизация
     * @param {string} login
     * @param {string} password
     * @returns {Promise<{success: boolean, message: string}|{data: {accessToken: string, refreshToken: string}, success: boolean}>}
     */
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

    /**
     * Выход
     * @returns {Promise<{success: boolean, message: string}|{success: boolean}>}
     */
    async logout() {
        try {
            await authHost.get('/api/user/logout')
            UserState.logout()
            return {success: true}
        } catch (error) {
            return  {success: false, message: error.message}
        }
    }

    /**
     * Проаверка аторизации пользователя
     * @returns {Promise<{data: any, success: boolean}|{success: boolean}>}
     */
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

    /**
     * Delete user
     * @param {number[]} userIds
     * @returns {Promise<{success: boolean, message: string}|{data: any, success: boolean}>}
     */
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
