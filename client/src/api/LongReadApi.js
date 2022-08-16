import {host} from "./Main";

class LongReadApi {
    async getStatistic(filter) {
        const statistic = await host.post('/api/long-read/statistic', filter)

        return statistic.data
    }
}

export default new LongReadApi()
