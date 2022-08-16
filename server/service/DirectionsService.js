const {MedDirections} = require('../models')

class DirectionsService {
    async getAll() {
        return await MedDirections.findAll({
            attributes: [['ID', 'id'], ['UF_XML_ID', 'code'], ['UF_NAME', 'name']]
        })
    }
}

module.exports = new DirectionsService()
