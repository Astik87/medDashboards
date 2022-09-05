import {host} from "./Main";

class WavesApi {
    async getAll(limit, page) {
        try {
            const response = await host.get('/api/waves', {params: {limit, page}})

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }
}

export default new WavesApi()
