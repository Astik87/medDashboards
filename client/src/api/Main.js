import axios from "axios";

const host = axios.create({
    baseURL: process.env.REACT_APP_DOMAIN_NAME
})

const hostWithFilter = axios.create({
    baseURL: process.env.REACT_APP_DOMAIN_NAME
})

const filterInterceptor = config => {

    if (config.method !== 'get')
        return config

    const filter = config.params

    if (!filter)
        return config

    const apiFilter = {}

    const month = filter.month < 10 ? '0' + filter.month : filter.month
    const day = filter.day < 10 ? '0' + filter.day : filter.day
    if (filter.month && !filter.day) {
        const maxDay = new Date(filter.year, filter.month, 0).getDate()
        apiFilter.dateFrom = `${filter.year}-${month}-01T00:00:00`
        apiFilter.dateTo = `${filter.year}-${month}-${maxDay}T23:59:00`
    } else if (filter.day) {
        apiFilter.dateFrom = `${filter.year}-${month}-${day}T00:00:00`
        apiFilter.dateTo = `${filter.year}-${month}-${day}T23:59:00`
    } else {
        apiFilter.dateFrom = `${filter.year}-01-01T00:00:00`
        apiFilter.dateTo = `${filter.year}-12-31T23:59:00`
    }

    apiFilter.directionId = filter.directionId ? filter.directionId : ''
    apiFilter.eventId = filter.eventId ? filter.eventId : ''

    delete config.params.year
    delete config.params.month
    delete config.params.day

    config.params = {...config.params, ...apiFilter}

    return config
}

hostWithFilter.interceptors.request.use(filterInterceptor)

export {
    host,
    hostWithFilter
}
