const Router = require('express')
const router = new Router
const filterMiddleware = require('../middleware/filtersMiddleware')
const UserController = require('../controllers/UserController')

router.post('/statistic', filterMiddleware, UserController.getStatistic)

module.exports = router
