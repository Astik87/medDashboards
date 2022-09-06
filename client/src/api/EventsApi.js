import {host, hostWithFilter} from "./Main"

/**
 * API для мероприятий
 */
class EventsApi {
    /**
     *
     * @returns {Promise<[{id: number, name: string}]>}
     */
    async getAll() {
        const events = await hostWithFilter.get('/api/events')

        return events.data
    }

    /**
     * Получить статистику по мероприятиям
     * @param filter
     * @return {Promise<boolean|{success: boolean, message: *, status: *}|{data: *, success: boolean}>}
     */
    async getStatistic(filter) {
        if (!filter)
            return false

        try{
            const statistic = await hostWithFilter.get('/api/events/statistic', {params: {...filter}})

            return {success: true, data: statistic.data}
        } catch (error) {
            return {success: false, status: error.status, message: error.message}
        }

    }

    /**
     * Получить кол-ва пользователей зарегистрированных на мероприятие
     * @param {number} eventId
     * @return {Promise<{success: boolean, message: *}|{data: any, success: boolean}>}
     */
    async getVisitsCount(eventId) {
        try {

            const response = await host.post('/api/events/visits-count', {eventId})

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }

    /**
     * Получить количество пользователей смотревших мероприятие больше значения minutes
     * @param {{}} filter
     * @param {number} minutes
     * @return {Promise<{success: boolean, message: *}|{data: any, success: boolean}>}
     */
    async getViewsGteMin(filter, minutes) {
        try {
            const response = await hostWithFilter.get('/api/events/views-gte-min', {params: {...filter, minutes}})

            if(response.status !== 200)
                return {success: false, message: response.message}

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }

    /**
     * Получить планы мероприятий по дате
     * @param {{year: number, month: number, day: number}} filter
     * @param {number} limit
     * @param {number} page
     * @return {Promise<{success: boolean, message: string}|{success: boolean, data: [{name: string, start: string, end: string, plan: number, fact: number}]}>}
     */
    async getEventPlans(filter, limit= 15, page= 1) {
        try {
            const response = await hostWithFilter.get('/api/events/plans', {params: {...filter, limit, page}})

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }

    /**
     * Получить список планов для react-select
     * @return {Promise<{success: boolean, message: *}|{data: {label: string, value: number}, success: boolean}>}
     */
    async getPlansForSelector() {
        try {
            const response = await host.get('/api/events/plans/for-selector')

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }

    /**
     * Создать план мероприятий
     * @param {string} name
     * @param {number} start Date TimeStamp
     * @param {number} end Date TimeStamp
     * @param {number} plan
     * @return {Promise<{success: boolean, message: *}|{data: *, success: boolean}>}
     */
    async createPlan(name, start, end, plan) {
        try {
            const response = host.post('/api/events/plans', {name, start, end, plan})

            return {success: true, data: response.date}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }

    /**
     * Удалить план
     * @param {number} id
     * @return {Promise<void>}
     */
    async deletePlan(id) {
        try {
            const response = await host.delete('/api/events/plans', {params: {id}})

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }
}

export default new EventsApi()
