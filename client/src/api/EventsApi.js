import {host, hostWithFilter} from "./Main";

/**
 * API для мероприятий
 */
class EventsApi {
    /**
     *
     * @returns {Promise<[{id: number, name: string}]>}
     */
    async getAll() {
        const events = await hostWithFilter.get('/api/events/all')

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
            const statistic = await hostWithFilter.post('/api/events/statistic', {...filter})

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
            const response = await hostWithFilter.post('/api/events/views-gte-min', {...filter, minutes})

            if(response.status !== 200)
                return {success: false, message: response.message}

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }
}

export default new EventsApi()
