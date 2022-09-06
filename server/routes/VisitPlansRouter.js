const Router = require('express')
const router = new Router
const filterMiddleware = require('../middleware/filtersMiddleware')
const VisitsController = require('../controllers/VisitsController')

router.get('/plans', filterMiddleware, VisitsController.getPlans)
router.delete('/plans', VisitsController.deletePlan)
router.get('/plans/for-selector', VisitsController.getPlansForSelector)
router.post('/plans', VisitsController.createPlan)

module.exports = router
