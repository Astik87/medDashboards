const Router = require('express')
const EventsController = require('../controllers/EventsController')
const filtersMiddleware = require('../middleware/filtersMiddleware')

const router = new Router()

router.get('/get-all', EventsController.getAll)
router.post('/statistic', filtersMiddleware, EventsController.getStatistic)

module.exports = router
