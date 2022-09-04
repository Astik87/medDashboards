const Router = require('express')
const router = new Router
const userRouter = require('./UserRouter')
const longReadRouter = require('./LongReadRouter')
const directionsRouter = require('./DirectionsRouter')
const eventsRouter = require('./EventsRouter')
const visitGroupsRouter = require('./VisitGroupsRouter')

router.use('/user', userRouter)
router.use('/long-read', longReadRouter)
router.use('/directions', directionsRouter)
router.use('/events', eventsRouter)
router.use('/visits', visitGroupsRouter)

module.exports = router
