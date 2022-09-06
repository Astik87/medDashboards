const Router = require('express')
const router = new Router()
const WavesController = require('../controllers/WavesController')

router.get('', WavesController.getWaves)
router.delete('', WavesController.deleteWave)
router.post('', WavesController.createWave)

module.exports = router
