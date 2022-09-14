const Router = require('express')
const router = new Router
const authMiddleware = require('../middleware/authMiddleware')
const filterMiddleware = require('../middleware/filtersMiddleware')
const UserController = require('../controllers/UserController')

router.get('/statistic', filterMiddleware, UserController.getStatistic)
router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/logout', UserController.logout)
router.get('/refresh', UserController.refresh)

module.exports = router
