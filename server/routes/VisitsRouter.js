const Router = require('express')
const router = new Router
const filterMiddleware = require('../middleware/filtersMiddleware')
const VisitsController = require('../controllers/VisitsController')

router.post('/get-plans', filterMiddleware, VisitsController.getPlans)
router.post('/create-plan', VisitsController.createPlan)

module.exports = router
