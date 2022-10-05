const {ProdoctorovParser} = require('../models')

class ProdoctorovParserService {
    async get(limit = 25, page = 1) {

        limit = +limit
        page = +page

        if(!limit)
            limit = 25

        if(!page)
            page = 1

        return await ProdoctorovParser.findAndCountAll({
            attributes: [
                ['ID', 'id'],
                ['UF_USER_ID', 'medUserId'],
                ['UF_NAME', 'name'],
                ['UF_CITY', 'city'],
                ['UF_CITY_MED', 'cityMed'],
                ['UF_DIRECTION', 'direction'],
                ['UF_DIRECTION_MED', 'directionMed'],
                ['UF_DIFFERENCES', 'differences']
            ],
            limit,
            offset: (page-1) * limit
        })
    }
}

module.exports = ProdoctorovParserService