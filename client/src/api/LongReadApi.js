import {host} from "./Main";

/**
 * API для статистики LongRead
 */
class LongReadApi {
    /**
     * Получить статистику LongRead
     * @param {{dateFrom: string, dateTo: string, eventId: number, directionId: number}} filter
     * @returns {Promise<{success: boolean, message: string}|{data: {}, success: boolean}>}
     */
    async getStatistic(filter) {
        try {
            const statistic = await host.post('/api/long-read/statistic', filter)

            return {success: true, data: statistic.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }
}

export default new LongReadApi()
