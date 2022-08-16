import {host} from "./Main";

class DirectionsApi {
    async getAll() {
        const directionsList = await host.get('/api/directions/get-all')

        return directionsList.data
    }
}

export default new DirectionsApi()
