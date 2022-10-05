const Router = require('express')
const LongReadController = require('../controllers/LongReadController')
const filtersMiddleware = require('../middleware/filtersMiddleware')

const router = new Router()

router.get('/plans', filtersMiddleware, LongReadController.getPlans)
router.delete('/plans', LongReadController.deletePlan)
router.get('/plans/for-selector', LongReadController.getPlansForSelector)
router.post('/plans', LongReadController.createPlan)

router.get('/statistic', filtersMiddleware, LongReadController.getStatistic)
router.get('/types', LongReadController.getLongReadTypes)

module.exports = router
