const Router = require('express')
const EventsController = require('../controllers/EventsController')
const filtersMiddleware = require('../middleware/filtersMiddleware')

const router = new Router()

router.get('', EventsController.getAll)
router.get('/statistic', filtersMiddleware, EventsController.getStatistic)
router.post('/visits-count', EventsController.getVisitsCount)
router.get('/views-gte-min', filtersMiddleware, EventsController.getViewsGteMin)

router.get('/plans', filtersMiddleware, EventsController.getEventPlans)
router.post('/plans', EventsController.createPlan)

module.exports = router
