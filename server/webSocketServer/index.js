const WebSocket = require('ws')

const BaseController = require('./controllers/BaseController')

const handlers = require('./handlers')
const controllers = require('./handlers/controllers')

class WebSocketServer {
    server = false
    port = 9000

    constructor(port) {
        if(!port)
            return

        if(typeof port !== 'number')
            throw Error('Port is not a number')

        this.port = port
    }

    start() {
        this.server = new WebSocket.Server({port: this.port})

        console.log(`WebSocket Server started on port ${this.port}`)

        this.server.on('connection', this.onConnection)
    }

    onConnection = (connection) => {
        handlers.connection.forEach((callback) => callback(connection))

        connection.on('message', (message) => this.onMessage(connection, message))
        connection.on('close', () => this.onClose(connection))
    }

    onClose = (connection) => {
        handlers.close.forEach((callback) => callback(connection))
    }

    onMessage = (connection, message) => {
        handlers.message.forEach((callback) => callback(connection, message))
        this.callAction(connection, message)
    }

    callAction(connection, message) {
        if(!message)
            return connection.send(connection, {error: 'Message is empty', code: 400})

        let req = false

        try {
            req = JSON.parse(message)
        } catch (error) {
            return this.send(connection, {error: error.message, code: 400})
        }

        if(!req.controller)
            return this.send(connection, {error: 'Controller is undefined', code: 400})

        if(!req.action)
            return this.send(connection, {error: 'Action is undefined', code: 400})

        const controller = controllers[req.controller]

        if(!controller)
            return this.send(connection, {error: `Controller ${req.controller} not found`, code: 404})

        if(controller instanceof BaseController)
            controller.callAction(connection, req)
        else
            this.send(connection, {error: `Controller ${req.controller} not instanceof BaseController`, code: 500})
    }

    send(connection, data) {
        connection.send(JSON.stringify(data))
    }
}

module.exports = WebSocketServer