const UserController = require('../../controllers/UserController')
const ProdoctorovParserController = require('../../controllers/ProdoctorovParserController')
const LongReadController = require('../../controllers/LongReadController')

module.exports = {
    User: UserController,
    ProdoctorovParser: ProdoctorovParserController,
    LongRead: LongReadController,
}
