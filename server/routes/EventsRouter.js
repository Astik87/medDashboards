const Router = require('express')
const EventsController = require('../controllers/EventsController')
const filtersMiddleware = require('../middleware/filtersMiddleware')

const router = new Router()

router.get('/all', EventsController.getAll)
router.post('/statistic', filtersMiddleware, EventsController.getStatistic)
router.post('/visits-count', EventsController.getVisitsCount)
router.post('/views-gte-min', filtersMiddleware, EventsController.getViewsGteMin)

module.exports = router
