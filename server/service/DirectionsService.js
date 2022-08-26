const {MedDirections} = require('../models')

/**
 * Класс для работы с мед. направлениями
 */
class DirectionsService {

    /**
     * Получить все мед. направления
     * @return {Promise<Model[]>}
     */
    static async getAll() {
        return await MedDirections.findAll({
            attributes: [['ID', 'id'], ['UF_XML_ID', 'code'], ['UF_NAME', 'name']]
        })
    }

    /**
     * DirectionsService для сбора статистики
     * @return {DirectionsService}
     */
    static getDirectionsForStatistic() {
        const directionsService = new DirectionsService()

        directionsService.direactionsStatistic = [{name: 'Не указан', count: 0}]
        directionsService.direactionsStatisticIndexesList = {}

        return directionsService
    }

    /**
     * @param {string} directionName Название мед. направлкния
     */
    indexValue(directionName) {
        const directionIndex = directionName ? this.direactionsStatisticIndexesList[directionName] : 0
        if(typeof directionIndex === 'undefined')
            this.direactionsStatisticIndexesList[directionName] = this.direactionsStatistic.push({name: directionName, count: 1}) - 1
        else
            this.direactionsStatistic[directionIndex].count++
    }

    getStatisticResult(sorting = true, length = 5) {

        if(!this.direactionsStatistic[0].count)
            this.direactionsStatistic = this.direactionsStatistic.slice(1)

        if(sorting)
            this.direactionsStatistic = this.direactionsStatistic.sort((a, b) => b.count - a.count)

        if(length)
            this.direactionsStatistic = this.direactionsStatistic.slice(0, length)

        return this.direactionsStatistic
    }
}

module.exports = DirectionsService
