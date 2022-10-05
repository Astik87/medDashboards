const Router = require('express')
const router = new Router()
const ProdoctorovParserController = require('../controllers/ProdoctorovParserController')

router.get('', ProdoctorovParserController.get)

module.exports = router