const Router = require('express')
const EventsController = require('../controllers/EventsController')

const router = new Router()

router.get('/get-all', EventsController.getAll)

module.exports = router
