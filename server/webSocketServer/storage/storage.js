const UserStorage = require('./UserStorage')
const ProdoctorovParserStorage = require('./ProdoctorovParserStorage')

module.exports = {
    userStore: new UserStorage(),
    prodoctorovParser: new ProdoctorovParserStorage()
}