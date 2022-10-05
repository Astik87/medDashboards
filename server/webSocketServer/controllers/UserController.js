const BaseController = require('./BaseController')
const UserService = require('../services/UserService')
const Storage = require('../storage')
const WSError = require('../utils/WSError')

class UserController extends BaseController {
    login = async (connection, data) => {
        const userService = new UserService()
        return {success: await userService.login(connection, data)}
    }

    getStorage = async () => {
        return Storage.getStorage('userStore')
    }

    logout(connection) {
        const {user} = connection
        if(!user || !user.id)
            return {}

        const userService = new UserService()
        return userService.logout(user.id)
    }

    getNotifications = async (connection) => {
        if(!connection.user)
            throw WSError.Unauthorized()
        const userService = new UserService()
        return await userService.getNotifications(connection.user.id)
    }

    deleteUserNotifications = async (connection) => {
        if(!connection.user)
            throw WSError.Unauthorized()
        const userService = new UserService()
        userService.deleteUserNotifications(connection.user.id)
    }
}

module.exports = new UserController()