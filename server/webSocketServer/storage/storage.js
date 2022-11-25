const UserStorage = require('./UserStorage')
const ProdoctorovParserStorage = require('./ProdoctorovParserStorage')
const LongReadStorage = require('./LongReadStorage')

module.exports = {
    userStore: new UserStorage(),
    prodoctorovParser: new ProdoctorovParserStorage(),
    longRead: new LongReadStorage()
}
