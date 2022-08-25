class DateService {
    datesForStatistic = []
    period = 'months'

    /**
     * Возвращает период между dateFrom и dateTo
     * @param dateFrom
     * @param dateTo
     * @return {string} months|days|hours
     */
    getPeriod(dateFrom, dateTo) {

        if((dateTo.getTime() - dateFrom.getTime()) <= 24*60*60*1000)
            return 'hours'

        if((dateTo.getTime() - dateFrom.getTime()) <= 31*24*60*60*1000)
            return 'days'

        return 'months'
    }

    /**
     * Получить массив с месяцами
     * @return {string[]}
     */
    getMonthNames() {
        return ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    }

    /**
     * Массив с месяцами для статистики
     * @return [{label: string, value: 0}]
     */
    getMonthArrayForStatistic() {
        const months = []
        const monthNames = this.getMonthNames()

        for(let month = 0; month < 12; month++) {
            months.push({label: monthNames[month], value: 0})
        }

        return months
    }

    /**
     * Массив с днями для статистики
     * @param {number} year 2022
     * @param {number} month индекс месяуа (Январь - 1, Февраль - 2 ...)
     * @return [{label: string, value: 0}]
     */
    getDaysArrayForStatistic(year, month) {
        const days = []
        const maxDays = new Date(year, month, 0).getDate()
        for(let day = 1; day < maxDays+1; day++) {
            if (day < 10)
                day = '0'+day

            days.push({label: day, value: 0})
        }

        return days
    }

    /**
     * Массив с часами для статистики
     * @return [{label: string, value: 0}]
     */
    getHoursArrayForStatistic() {
        const hours = []
        for(let hour = 0; hour <= 24; hour++) {
            if (hour < 10)
                hour = '0'+hour

            hours.push({label: hour+":00", value: 0})
        }

        return hours
    }

    /**
     * Экземпляр класса DateService с датами для статистики за период c dateFrom по dateTo
     * @param {Date} dateFrom
     * @param {Date} dateTo
     * @return {DateService}
     */
    static getDatesForStatisticByPeriod(dateFrom = false, dateTo= false) {
        const dateService = new DateService()

        if(!dateFrom || !dateTo) {
            dateService.period = 'hours'
        } else {
            dateService.period = dateService.getPeriod(dateFrom, dateTo)
        }

        if (dateService.period === 'months')
            dateService.datesForStatistic = dateService.getMonthArrayForStatistic()
        else if (dateService.period === 'days')
            dateService.datesForStatistic = dateService.getDaysArrayForStatistic(dateFrom.getFullYear(), dateFrom.getMonth() + 1)
        else
            dateService.datesForStatistic = dateService.getHoursArrayForStatistic()

        return dateService
    }

    /**
     * Увеличивает value у объекта с татой date в массиве this.datesForStatistic
     * @param {Date} date
     * @param {number} count
     */
    indexValue(date, count = 1) {
        if(this.period === 'months')
            this.datesForStatistic[date.getMonth()].value += count
        else if(this.period === 'days')
            this.datesForStatistic[date.getDate()-1].value += count
        else
            this.datesForStatistic[date.getHours()].value += count
    }

    /**
     * Возвращает результат сбора статистики по дате
     * @return {[{label: string, value: menubar}]}
     */
    getResStatistic() {
        return this.datesForStatistic
    }

}


module.exports = DateService
