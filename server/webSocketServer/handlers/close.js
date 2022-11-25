const userController = require('../controllers/UserController')
const longReadController = require('../controllers/LongReadController')

module.exports = [
    userController.logout,
    longReadController.closeConnection,
]
