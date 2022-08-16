import {host} from "./Main";

class EventsApi {
    async getAll() {
        const events = await host.get('/api/events/get-all')

        return events.data
    }
}

export default new EventsApi()
