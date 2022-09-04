const Router = require('express')
const router = new Router
const filterMiddleware = require('../middleware/filtersMiddleware')
const VisitsController = require('../controllers/VisitsController')

router.get('/plans', filterMiddleware, VisitsController.getVisitGroups)
router.post('/create-plan', VisitsController.createGroup)

module.exports = router
