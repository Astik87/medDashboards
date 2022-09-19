const Router = require('express')
const router = new Router
const authMiddleware = require('../middleware/authMiddleware')
const filterMiddleware = require('../middleware/filtersMiddleware')
const UserController = require('../controllers/UserController')
const adminMiddleware = require('../middleware/adminMiddleware')

router.get('/statistic', authMiddleware, filterMiddleware, UserController.getStatistic)
router.get('', adminMiddleware, UserController.get)
router.post('', adminMiddleware, UserController.create)
router.delete('', adminMiddleware, UserController.delete)
router.post('/login', UserController.login)
router.get('/logout', UserController.logout)
router.get('/refresh', UserController.refresh)

module.exports = router
