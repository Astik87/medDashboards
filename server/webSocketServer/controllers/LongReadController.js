const jwt = require('jsonwebtoken')

const BaseController = require('./BaseController')
const WSError = require('../utils/WSError')

const LongReadService = require('../services/LongReadService')

class LongReadController extends BaseController {

    beforeAction = async (data) => {
        const {token} = data
        if(!token)
            throw WSError.Unauthorized()

        try {
            const payload = await jwt.verify(token, process.env.LONG_READ_SECRET_KEY)

            return {...data, ...payload}
        } catch (error) {
            throw WSError.BadRequest('Invalid token')
        }
    }

    login = async (connection, data) => {

        const longReadService = new LongReadService()

        return await longReadService.login(connection, data)
    }

    closeConnection = async (connection) => {
        const {user} = connection

        if(!user)
            return false

        const longReadService = new LongReadService()
        return longReadService.closeConnection(user)
    }

    setViewingPercentage = async (connection, data) => {
        const {value, userId} = data

        if(!value)
            throw WSError.BadRequest('value is required')

        const longReadService = new LongReadService()
        return longReadService.setViewingPercentage(userId, value)
    }

    addLink = async (connection, data) => {
        const {userId, link} = data

        if (!link)
            throw WSError.BadRequest('link is required')

        const longReadService = new LongReadService()
        return longReadService.addLink(userId, link)
    }

    addDownloadedFileLink = async (connection, data) => {
        const {userId, link} = data

        if (!link)
            throw WSError.BadRequest('link is required')

        const longReadService = new LongReadService()
        return longReadService.addLink(userId, link, 'file')
    }

    addTestAnswers = async (connection, data) => {
        const {userId, testName, question, answers} = data

        if(!testName)
            throw WSError.BadRequest('testName is required')

        if(!question)
            throw WSError.BadRequest('question is required')

        if(!answers || !answers.length)
            throw WSError.BadRequest('answers is required')

        const longReadService = new LongReadService()
        return longReadService.addTestAnswers(userId, testName, question, answers)
    }

    addVideoViewingVideo = async (connection, data) => {
        let {userId, videoName, time} = data

        if(!videoName)
            throw WSError.BadRequest('videoName is required')

        time = Number(time)
        if(!time)
            throw WSError.BadRequest('time is required')

        const longReadService = new LongReadService()
        return longReadService.addVideoViewingVideo(userId, videoName, time)
    }

    getStore = () => {
        const longReadService = new LongReadService()

        return longReadService.getStore()
    }
}

module.exports = new LongReadController()
