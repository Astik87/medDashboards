import {authHost} from "@api/Main";

class ProdoctorovParserApi {
    async getData(limit = 25, page = 1) {
        try {
            const response = await authHost.get('/api/prodoctorov-parser', {params: {limit, page}})

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }
}

export default new ProdoctorovParserApi()