import {host} from "./Main";

/**
 * API для мероприятий
 */
class EventsApi {
    /**
     *
     * @returns {Promise<[{id: number, name: string}]>}
     */
    async getAll() {
        const events = await host.get('/api/events/get-all')

        return events.data
    }
}

export default new EventsApi()
