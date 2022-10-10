require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')

const sequelize = require('./db')
const models = require('./models')
const router = require('./routes/index')
const apiMiddleware = require('./middleware/apiMiddleware')
const apiError = require('./middleware/apiError')
const WebSocketServer = require('./webSocketServer')

const PORT = process.env.PORT || 5000

let whitelist = ['http://localhost:3000', 'http://192.168.1.121:3000']
let corsOptions = {
    credentials: true,
    origin: function(origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

const app = express()
app.use(cors(process.env.IS_DEV ? corsOptions : {}));
app.use(express.json())
app.use(cookieParser())
app.use('/static', express.static(path.resolve(__dirname, 'static')))
app.use('/api', apiMiddleware, router)
app.use(apiError)

const start = async () => {
    try {
        const WSServer = new WebSocketServer(+process.env.WS_PORT)
        await sequelize.authenticate()
        app.listen(PORT, () => console.info(`Server started on port ${PORT}`))
        WSServer.start()
    } catch (error) {
        console.error(error);
    }
}

start()
