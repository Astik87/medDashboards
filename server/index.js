require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors');

const sequelize = require('./db')
const models = require('./models')
const router = require('./routes/index')
const apiMiddleware = require('./middleware/apiMiddleware')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors());
app.use(express.json())
app.use('/static', express.static(path.resolve(__dirname, 'static')))
app.use('/api', apiMiddleware, router)

const start = async () => {
    try {
        await sequelize.authenticate()
        app.listen(PORT, () => console.info(`Server started on port ${PORT}`))
    } catch (error) {
        console.error(error);
    }
}

start()
