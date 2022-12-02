const Router = require('express')
const router = new Router
const authMiddleware = require('../middleware/authMiddleware')
const filterMiddleware = require('../middleware/filtersMiddleware')
const UserController = require('../controllers/UserController')
const adminMiddleware = require('../middleware/adminMiddleware')

router.get('', adminMiddleware, UserController.get)
router.get('/usersCountByGroups', authMiddleware, filterMiddleware, UserController.getUsersCountByGroups)
router.get('/statistic', authMiddleware, filterMiddleware, UserController.getStatistic)
router.get('/med-users', adminMiddleware, UserController.getMedUsers)
router.get('/nmo-codes', adminMiddleware, UserController.getNmoCodes)
router.get('/logout', UserController.logout)
router.get('/refresh', UserController.refresh)
router.get('/groups', UserController.getGroups)

router.post('', adminMiddleware, UserController.create)
router.post('/login', UserController.login)
router.post('/import-nmo', UserController.importNmo)

router.delete('', adminMiddleware, UserController.delete)
router.delete('/delete-nmo-codes', adminMiddleware, UserController.deleteNmoCodes)

module.exports = router
