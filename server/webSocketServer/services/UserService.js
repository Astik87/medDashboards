const jwt = require('jsonwebtoken')

const {DashboardUser, DashboardNotifications} = require('../../models/index')
const Storage = require('../storage')
const BaseService = require('./BaseService')
const WSError = require('../utils/WSError')

class UserService extends BaseService {
    static storeName = 'userStore'

    /**
     * Проверить JWT Токен
     * @param {string} token
     * @returns {boolean|{}}
     */
    verifyToken(token) {
        try {
            return jwt.verify(token, process.env.SECRET_KEY)
        } catch (error) {
            return false
        }
    }

    /**
     * Авторизовать пользователя в WS
     * @param {WebSocket} connection
     * @param {{accessToken: string}} data
     * @returns {boolean}
     */
    async login(connection, data) {
        if (!data.accessToken)
            throw WSError.Unauthorized()

        const tokenDecoded = this.verifyToken(data.accessToken)

        if (!tokenDecoded)
            throw WSError.Unauthorized()


        const dbUser = await DashboardUser.findOne({
            attributes: [['UF_IS_ADMIN', 'isAdmin']],
            where: {ID: tokenDecoded.id}
        })

        if(!dbUser)
            throw WSError.BadRequest('Пользователь не найден')

        const storage = Storage.getStorage(UserService.storeName)
        tokenDecoded.isAdmin = dbUser.toJSON().isAdmin
        storage.set(tokenDecoded.id, {connection, ...tokenDecoded})
        connection.user = tokenDecoded

        return true
    }

    /**
     * Выход из WS
     * @param {number} userId
     * @returns {{}}
     */
    logout(userId) {
        const storage = Storage.getStorage(UserService.storeName)
        storage.delete(userId)
        return {}
    }

    /**
     * Список авторизованных в WS пользователей
     * @returns {Object.<string, {id: number, connection: WebSocket, accessToken: string}>}
     */
    getAuthorizedUsers() {
        return Storage.getStorage(UserService.storeName).getStorage()
    }

    /**
     * Отправить уведомление всем пользователям
     * @param {string} text
     * @returns {Promise<{offlineUsers: number, onlineUsers: number}>}
     */
    async sendNotificationAllUsers(text) {
        const users = await DashboardUser.findAll({
            attributes: [
                ['ID', 'id']
            ],
            where: {
                UF_IS_ADMIN: 1
            }
        })

        return await this.sendNotification(users, text)
    }

    /**
     * Отправить уведомление пользователям по их id
     * @param {[number]} userIds
     * @param {string} text
     * @returns {Promise<{offlineUsers: number, onlineUsers: number}>}
     */
    async sendNotificationUsersByIds(userIds, text) {
        const users = await DashboardUser.findAll({
            attributes: [['ID', 'id']],
            where: {
                ID: userIds,
                UF_IS_ADMIN: 1
            }
        })

        return this.sendNotification(users, text)
    }

    /**
     * Отправить уведомление пользователям users
     * Если пользователь не онлайн, сохранить в базу до следующего его посещения
     * @param {[User]} users
     * @param {string} text
     * @returns {Promise<{offlineUsers: number, onlineUsers: number}>}
     */
    async sendNotification(users, text) {
        const onlineUsers = Storage.getStorage(UserService.storeName)

        const saveNotifications = []
        const now = new Date()
        const res = {onlineUsers: 0, offlineUsers: 0}

        const onlineUsersMassage = JSON.stringify({
            controller: 'User',
            action: 'notification',
            data: {message: text}
        })

        users.forEach((user) => {
            const {id} = user.toJSON()
            const onlineUser = onlineUsers.get(id)

            if(onlineUser && onlineUser.connection) {
                onlineUser.connection.send(onlineUsersMassage)
                res.onlineUsers++
            } else {
                saveNotifications.push({UF_USER: id, UF_TEXT: text, UF_DATE: now})
                res.offlineUsers++
            }
        })

        await DashboardNotifications.bulkCreate(saveNotifications)

        return res
    }

    async getNotifications(userId) {
        const notifications = await DashboardNotifications.findAll({
            attributes: [['UF_DATE', 'date'], ['UF_TEXT', 'message']],
            where: {
                UF_USER: userId
            }
        })

        return notifications
    }

    async deleteUserNotifications(userId) {
        DashboardNotifications.destroy({
            where: {
                UF_USER: userId
            }
        })
    }
}

module.exports = UserService