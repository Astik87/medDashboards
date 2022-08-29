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
    let strDate = ''

    strDate += padTo2Digits(date.getDate())
    strDate += '.' + padTo2Digits(date.getMonth() + 1)
    strDate += '.' + date.getFullYear()
    strDate += ' ' + padTo2Digits(date.getHours())
    strDate += ':' + padTo2Digits(date.getMinutes())

    return strDate
}

export {
    formatDate
}
