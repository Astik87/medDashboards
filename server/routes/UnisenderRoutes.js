const Router = require('express')
const router = Router()
const filterMiddleware = require('../middleware/filtersMiddleware')
const UnisenderController = require('../controllers/UnisenderController')

router.get('/getCampaigns', filterMiddleware, UnisenderController.getCampaigns)
router.get('/getCampaignDeliveryStats', UnisenderController.getCampaignDeliveryStats)
router.get('/getTaskResult', UnisenderController.getTaskResult)
router.get('/getStatisticFromFile', UnisenderController.getStatisticFromFile)
router.get('/getLists', UnisenderController.getLists)
router.post('/createList', UnisenderController.createList)
router.post('/importContacts', UnisenderController.importContacts)
router.delete('/deleteList', UnisenderController.deleteList)

module.exports = router