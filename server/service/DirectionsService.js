const {MedDirections} = require('../models')

/**
 * Класс для работы с мед. направлениями
 */
class DirectionsService {

    /**
     * Получить все мед. направления
     * @return {Promise<Model[]>}
     */
    async getAll() {
        return await MedDirections.findAll({
            attributes: [['ID', 'id'], ['UF_XML_ID', 'code'], ['UF_NAME', 'name']]
        })
    }
}

module.exports = new DirectionsService()
