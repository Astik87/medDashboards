const Router = require('express')
const LongReadController = require('../controllers/LongReadController')
const filtersMiddleware = require('../middleware/filtersMiddleware')

const router = new Router()

router.get('/statistic', filtersMiddleware, LongReadController.getStatistic)

module.exports = router
