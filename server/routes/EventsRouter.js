const Router = require('express')
const EventsController = require('../controllers/EventsController')
const filtersMiddleware = require('../middleware/filtersMiddleware')

const router = new Router()

router.get('', EventsController.getAll)
router.get('/statistic', filtersMiddleware, EventsController.getStatistic)
router.get('/promotions-statistic', filtersMiddleware, EventsController.getPromotionStatistic)
router.post('/visits-count', EventsController.getVisitsCount)
router.get('/views-gte-min', filtersMiddleware, EventsController.getViewsGteMin)
router.get('/get-event-visits', EventsController.getEventVisits)

router.get('/plans', filtersMiddleware, EventsController.getEventPlans)
router.delete('/plans', EventsController.deletePlan)
router.get('/plans/for-selector', EventsController.getEventPlansForSelector)
router.post('/plans', EventsController.createPlan)

module.exports = router
