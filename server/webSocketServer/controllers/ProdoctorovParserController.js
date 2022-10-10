const BaseController = require('./BaseController')
const UserService = require('../services/UserService')
const ProdoctorovParserService = require('../services/ProdoctorovParserService')
const WSError = require('../utils/WSError')

class ProdoctorovParserController extends BaseController {
    startParser = async (connection) => {
        if(!connection.user || !connection.user.isAdmin)
            throw WSError.Forbidden()

        const prodoctorovParserService = new ProdoctorovParserService(this.changeParserStatus)

        prodoctorovParserService.startParser()

        return {}
    }

    upload = async (connection) => {
        if(!connection.user || !connection.user.isAdmin)
            throw WSError.Forbidden()

        const prodoctorovParserService = new ProdoctorovParserService(this.changeParserStatus)
        prodoctorovParserService.upload()
        return {}
    }

    getParserStatus = async (connection) => {
        const prodoctorovParserService = new ProdoctorovParserService()
        return {status: prodoctorovParserService.isStarted()}
    }

    addUserInWatchingList = async (connection) => {
        const prodoctorovParserService = new ProdoctorovParserService()
        return prodoctorovParserService.addUserInWatchingList(connection.user.id)
    }

    removeUserInWatchingList = async (connection) => {
        const prodoctorovParserService = new ProdoctorovParserService()
        return prodoctorovParserService.removeUserInWatchingList(connection.user.id)
    }

    changeParserStatus = async (status, message) => {

        const {statusCodes} = ProdoctorovParserService

        switch (status) {
            case statusCodes.START:
                this.sendMessageAllUsers(message)
                break
            case statusCodes.END:
                this.sendMessageAllUsers(message)
                break
            case statusCodes.ERROR:
                this.sendMessageAllUsers(message)
                break
        }

        this.sendMessageWatchedUsers(status, message)
    }

    sendMessageWatchedUsers = async (status, message) => {
        const prodoctorovParserService = new ProdoctorovParserService()
        const userService = new UserService()

        const watchingUsers = prodoctorovParserService.getWatchingUsersList()
        if (watchingUsers === false)
            return 0

        const onlineUsers = userService.getAuthorizedUsers()
        const messageData = {controller: 'ProdoctorovParser', action: 'progress', data: {status, message}}
        watchingUsers.forEach((userId) => {
            if(onlineUsers[userId])
                this.send(onlineUsers[userId].connection, messageData)
        })
    }

    sendMessageAllUsers = async (message) => {
        const userService = new UserService()
        return userService.sendNotificationAllUsers(message)
    }
}

module.exports = new ProdoctorovParserController()