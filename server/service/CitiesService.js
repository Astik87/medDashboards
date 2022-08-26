class CitiesService {
    /**
     * CitiesService для сбора статистики
     * @return {CitiesService}
     */
    static getCitiesForStatistic = () => {
        const citiesForStatistic = new CitiesService()

        citiesForStatistic.citiesList = [{name: 'Не указан', count: 0}]
        citiesForStatistic.citiesIndexiesList = {}

        return citiesForStatistic
    }

    /**
     * @param {string} cityName Название города
     */
    indexValue(cityName) {
        const cityIndex = cityName ? this.citiesIndexiesList[cityName] : 0
        if(typeof cityIndex === 'undefined')
            this.citiesIndexiesList[cityName] = this.citiesList.push({name: cityName, count: 1}) - 1
        else
            this.citiesList[cityIndex].count++
    }

    getStatisticResult(sorting = true, length = 5) {

        if(!this.citiesList[0].count)
            this.citiesList = this.citiesList.slice(1)

        if(sorting)
            this.citiesList = this.citiesList.sort((a, b) => b.count - a.count)

        if(length)
            this.citiesList = this.citiesList.slice(0, length)

        return this.citiesList
    }

}

module.exports = CitiesService
