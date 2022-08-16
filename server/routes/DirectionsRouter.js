const Router = require('express')
const DirectionsController = require('../controllers/DirectionsController')

const router = new Router()

router.get('/get-all', DirectionsController.getAll)

module.exports = router
