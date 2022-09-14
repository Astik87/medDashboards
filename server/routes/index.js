const Router = require('express')
const router = new Router
const authMiddleware = require('../middleware/authMiddleware')
const userRouter = require('./UserRouter')
const longReadRouter = require('./LongReadRouter')
const directionsRouter = require('./DirectionsRouter')
const eventsRouter = require('./EventsRouter')
const visitPlansRouter = require('./VisitPlansRouter')
const wavesRouter = require('./WavesRouter')

router.use('/user', userRouter)
router.use('/long-read', authMiddleware, longReadRouter)
router.use('/directions', authMiddleware, directionsRouter)
router.use('/events', authMiddleware, eventsRouter)
router.use('/visits', authMiddleware, visitPlansRouter)
router.use('/waves', authMiddleware, wavesRouter)

module.exports = router
