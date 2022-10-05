const connection = require('./connection')
const message = require('./message')
const close = require('./close')

const handlers = {
    connection,
    message,
    close
}

module.exports = handlers