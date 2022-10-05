const DocDocParserService = require('../services/ProdoctorovParserService')

class ProdoctorovParserController {
    async get(req, res, next) {
        try {
            const {limit, page} = req.query

            const docDocParserService = new DocDocParserService()
            const result = await docDocParserService.get(limit, page)

            return res.json(result)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new ProdoctorovParserController()