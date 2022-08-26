import {hostWithFilter} from "./Main";

/**
 * API для мероприятий
 */
class EventsApi {
    /**
     *
     * @returns {Promise<[{id: number, name: string}]>}
     */
    async getAll() {
        const events = await hostWithFilter.get('/api/events/get-all')

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
}

export default new EventsApi()
