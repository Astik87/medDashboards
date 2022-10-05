import closeHandlers from "./handlers/close";
import openHandlers from "./handlers/open";

class WebSocketClient {
    /**
     * @type {WebSocket}
     */
    socket = false
    isOpen = false
    isClosed = false
    hasError = false
    handlers = {
        open: openHandlers,
        message: {},
        close: closeHandlers,
        error: {}
    }
    messages = []

    connection(url) {
        if (!url)
            return false

        if (this.socket)
            this.socket = false

        this.url = url
        try {
            this.socket = new WebSocket(url)
            this.socket.addEventListener('open', this.onOpen)
            this.socket.addEventListener('close', this.onClose)
            this.socket.addEventListener('message', this.onMessage)
            this.socket.onerror = event => {
                console.log(event)
            }
            return true
        } catch (error) {
            this.onError({
                error: error.message,
                status: 500
            })
            return false
        }
    }

    onOpen = () => {
        this.isOpen = true
        this.sendMessages()
        this.handlers.open.forEach(callback => callback())
    }

    onClose = () => {
        this.isOpen = false
        this.handlers.close.forEach(callback => callback())
    }

    onMessage = ({data}) => {
        const message = JSON.parse(data)
        const {controller, action} = message

        if (message.data && message.data.error) {
            if (this.handlers.error[controller] && this.handlers.error[controller][action])
                this.handlers.error[controller][action].forEach(callback => callback(message.data))
            else
                this.onError(message.data)
        }

        if (
            !controller
            || !action
            || !this.handlers.message[controller]
            || !this.handlers.message[controller][action]) {
            return false
        }

        this.handlers.message[controller][action].forEach(callback => callback(message.data))
    }

    callbackIndexOf(callbackList, findCallback) {
        let callbackIndexOf = false
        callbackList.forEach((callback, index) => {
            if (callbackIndexOf !== false)
                return false
            if (callback.toString() === findCallback.toString())
                callbackIndexOf = index
        })

        return callbackIndexOf
    }

    addOnMessage = (controller, action, callback) => {
        if (!controller || !action)
            return false

        if (!this.handlers.message[controller])
            this.handlers.message[controller] = {}

        if (!this.handlers.message[controller][action])
            this.handlers.message[controller][action] = []

        const callbackIndex = this.callbackIndexOf(this.handlers.message[controller][action], callback)
        if (callbackIndex !== false)
            this.handlers.message[controller][action][callbackIndex] = callback
        else
            this.handlers.message[controller][action].push(callback)
    }

    addOnOpen = (callback) => {
        const callbackIndex = this.callbackIndexOf(this.handlers.open, callback)
        if (callbackIndex !== false)
            this.handlers.open[callbackIndex] = callback
        else
            this.handlers.open.push(callback)
    }

    addOnClose = (callback) => {
        const callbackIndex = this.callbackIndexOf(this.handlers.close, callback)
        if (callbackIndex !== false)
            this.handlers.close[callbackIndex] = callback
        else
            this.handlers.close.push(callback)
    }

    onError = () => {
    }

    addOnError = (controller, action, callback) => {
        if (!controller || !action)
            return false

        if (!this.handlers.error[controller])
            this.handlers.error[controller] = {}

        if (!this.handlers.error[controller][action])
            this.handlers.error[controller][action] = []

        this.handlers.error[controller][action].push(callback)
    }

    sendMessages = () => {
        this.messages.forEach(({controller, action, data}) => {
            this.socket.send(JSON.stringify({controller, action, data}))
        })
        this.messages = []
    }

    send = (controller, action, data = {}) => {
        if (!this.isOpen)
            return this.messages.push({controller, action, data})

        this.socket.send(JSON.stringify({controller, action, data}))
    }
}

export default new WebSocketClient()