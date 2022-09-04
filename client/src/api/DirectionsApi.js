import {host} from "./Main";

/**
 * API для мед. направлений
 */
class DirectionsApi {
    /**
     * Получить все мед. направления
     * @returns {Promise<[{id: number, code: string, name: string}]>}
     */
    async getAll() {
        const directionsList = await host.get('/api/directions')

        return directionsList.data
    }
}

export default new DirectionsApi()
