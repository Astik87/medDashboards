const Router = require('express')
const LongReadController = require('../controllers/LongReadController')
const longReadMiddleware = require('../middleware/longReadMiddleware')

const router = new Router()

router.post('/statistic', longReadMiddleware, LongReadController.getStatistic)

module.exports = router
