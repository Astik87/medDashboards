/**
 * Если число num меньше 10 добавляет '0' к началу строки для даты
 * @param {number} num
 * @return {string}
 */
const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
}

/**
 * Приводит дату в формат дд.мм.гггг
 * @param {Date} date
 * @return {string}
 */
const formatDate = (date) => {
    return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join('.')
        + ' ' +
        [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
            padTo2Digits(date.getSeconds()),
        ].join(':')
}

/**
 *
 * @param {{year: number, month: number|boolean, day: number|boolean}} filter
 * @return {{dateFrom: string, dateTo: string}}
 */
function getDateForFilter(filter) {
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

    return apiFilter
}

export {
    formatDate,
    getDateForFilter
}
