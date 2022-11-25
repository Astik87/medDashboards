const WSError = require('../utils/WSError')

class BaseController {

    beforeAction = async (data) => data

    /**
     * Вызов экшена
     * @param {WebSocket} connection
     * @param {{action: string, data: {}}} req
     * @returns {Promise<void>}
     */
    async callAction(connection, req) {
        const {action} = req

        if(!this[action]) {
            req.data = {error: 'Action is undefined', code: 400}
            return this.send(connection, req)
        }

        try {
            req.data = await this.beforeAction(req.data)
            req.data = await this[action](connection, req.data)
            this.send(connection, req)
        } catch (error) {
            if(error instanceof WSError)
                req.data = req.error = {error: error.message, status: error.status}
            else
                req.data = req.error = {error: 'Непредвиденная ошибка'}

            console.log('---- WS ERROR ---')
            console.log(error)
            console.log('---- WS ERROR ---')

            this.send(connection, req)
        }
    }

    /**
     * Отплавить сообщение
     * @param {WebSocket} connection
     * @param {{}} data
     */
    send(connection, data) {
        connection.send(JSON.stringify(data))
    }
}

module.exports = BaseController
