const jwt = require('jsonwebtoken')

const BaseService = require('./BaseService')
const Storage = require('../storage')

const {LongReadStatistics, LongReadTests, LongReadTestAnswers, LongReadViewingVideos} = require('../../models')
const WSError = require('../utils/WSError')

class LongReadService extends BaseService {
    static storageName = 'longRead'

    /**
     * Авторизация пользователя
     * @param {WebSocket} connection
     * @param {{userId: number, pageName: string}} data
     * @return {{connections: number, userId: string, data: {}}}
     */
    login = async (connection, data) => {
        const storage = Storage.getStorage(LongReadService.storageName)

        const findUser = storage.get(String(data.userId))
        let connectionIndex = 0

        let user = false

        if (findUser) {
            if (findUser.data.pageName !== data.pageName) {
                const connectionsList = [...findUser.connections]
                await this.uploadStatisticInDB(data.userId)
                for (const connect of connectionsList) {
                    delete connect.user
                    await connect.close()
                }
            } else {
                connectionIndex = findUser.connections.push(connection) - 1
                user = findUser
            }
        }

        if (!user)
            user = {
                userId: data.userId,
                connections: [connection],
                data: {
                    userId: data.userId,
                    connectedDate: new Date(),
                    closedDate: false,
                    fullTime: 0,
                    viewingPerc: 0,
                    links: [],
                    downloadedFiles: [],
                    pageName: data.pageName || '',
                    tests: [],
                    videos: [],
                }
            }

        storage.set(String(data.userId), user)

        connection.user = {userId: data.userId, connectionIndex}

        return {...user, connections: user.connections.length}
    }

    /**
     *
     * @param {{userId: number, connectionIndex: number}} connectionUser
     */
    closeConnection = async ({userId, connectionIndex}) => {
        const storage = Storage.getStorage(LongReadService.storageName)
        const user = storage.get(String(userId))

        if (!user)
            throw WSError.BadRequest(`user with id ${userId} not found`)

        if (connectionIndex === undefined || !user.connections[connectionIndex])
            throw new WSError(404, `connection not found (userId: ${userId}, connectionIndex: ${connectionIndex})`)

        user.connections.splice(connectionIndex, 1)
        console.log(user.connections.length)
        if (!user.connections.length)
            await this.uploadStatisticInDB(userId)

        return true
    }

    /**
     * Загрузить стстистику пользователя в базу
     * @param {number} userId
     */
    uploadStatisticInDB = async (userId) => {
        const storage = Storage.getStorage(LongReadService.storageName)
        const user = storage.get(String(userId))

        if (!user)
            throw WSError.BadRequest(`user with id ${userId} not found`)

        const data = {...user.data}

        const now = new Date()
        const longReadStatistic = await LongReadStatistics.create({
            UF_USER: data.userId,
            UF_CONNECT_TIME: data.connectedDate,
            UF_CLOSE_TIME: now,
            UF_FULL_TIME: Math.round(now.getTime() / 1000 - data.connectedDate / 1000),
            UF_VIEWING_PERC: data.viewingPerc,
            UF_PAGE_NAME: data.pageName,
            UF_LINKS: data.links.length ? JSON.stringify(data.links) : '',
            UF_DOWNLOADED_FILES: data.downloadedFiles.length ? JSON.stringify(data.downloadedFiles) : ''
        })

        for (const test of data.tests) {
            if (!test.questions || !test.questions.length)
                continue

            const longReadTest = await LongReadTests.create({
                UF_NAME: test.name,
                UF_LONG_READ: longReadStatistic.ID
            })

            test.questions.forEach(({question, answers}) => {
                LongReadTestAnswers.create({
                    UF_TEST: longReadTest.ID,
                    UF_QUESTION: question,
                    UF_ANSWER: JSON.stringify(answers)
                })
            })
        }

        data.videos.forEach(({name, time}) => {
            LongReadViewingVideos.create({
                UF_LONG_READ: longReadStatistic.ID,
                UF_NAME: name,
                UF_TIME: time,
            })
        })

        storage.delete(String(data.userId))
    }

    /**
     * Установаить процент просмотра страницы
     * @param {number} userId
     * @param {number} value
     * @return {boolean}
     */
    setViewingPercentage = (userId, value) => {
        const storage = Storage.getStorage(LongReadService.storageName)
        const user = storage.get(String(userId))

        if (!user)
            throw WSError.BadRequest(`user with id ${userId} not found`)

        if (value > user.data.viewingPerc) {
            user.data.viewingPerc = value
            storage.set(String(userId), user)
        }

        return true
    }

    /**
     * Добавить ссылку на которую перешел пользователь
     * @param {number} userId
     * @param {string} link
     * @param {'file' | 'link'} type
     * @return {boolean}
     */
    addLink = (userId, link, type = 'link') => {
        const storage = Storage.getStorage(LongReadService.storageName)
        const user = storage.get(String(userId))

        if (!user)
            throw WSError.BadRequest(`user with id ${userId} not found`)

        if (type === 'link' && !user.data.links.includes(link))
            user.data.links.push(link)

        if (type === 'file' && !user.data.downloadedFiles.includes(link))
            user.data.downloadedFiles.push(link)

        storage.set(String(userId), user)

        return true
    }

    /**
     * Добавить отверы на тесты
     * @param {number} userId
     * @param {string} testName
     * @param {string} question
     * @param {string[]} answers
     * @return {boolean}
     */
    addTestAnswers = (userId, testName, question, answers) => {
        const storage = Storage.getStorage(LongReadService.storageName)
        const user = storage.get(String(userId))

        if (!user)
            throw WSError.BadRequest(`user with id ${userId} not found`)

        let newAnswers = []
        let findTestIndex = false
        let findQuestionIndex = false
        for (const testIndex in user.data.tests) {
            const testInStore = user.data.tests[testIndex]
            if (testInStore.name === testName) {
                findTestIndex = testIndex
                break
            }
        }

        if (findTestIndex !== false) {
            const testInStore = user.data.tests[findTestIndex]
            for (const questionIndex in testInStore.questions) {
                const questionInStore = testInStore.questions[questionIndex]
                if (questionInStore.question === question) {
                    findQuestionIndex = questionIndex
                    const uniqueAnswers = answers.filter(answer => !questionInStore.answers.includes(answer))
                    newAnswers = [...questionInStore.answers, ...uniqueAnswers]
                    break
                }
            }

            if (findQuestionIndex !== false) {
                user.data.tests[findTestIndex].questions[findQuestionIndex].answers = [...newAnswers]
            } else {
                user.data.tests[findTestIndex].questions.push({question, answers})
            }
        } else {
            user.data.tests.push({
                name: testName,
                questions: [{question, answers}]
            })
        }

        storage.set(String(userId), user)

        return true
    }

    /**
     * Добавить время просмотра видео
     * @param {number} userId
     * @param {string} videoName
     * @param {number} time
     * @return {boolean}
     */
    addVideoViewing = (userId, videoName, time) => {
        const storage = Storage.getStorage(LongReadService.storageName)
        const user = storage.get(String(userId))

        if (!user)
            throw WSError.BadRequest(`user with id ${userId} not found`)

        let foundVideo = false
        const newViewingVideosList = user.data.videos.map((video) => {
            if (video.name !== videoName)
                return video

            if(video.time < time)
                video.time = time

            foundVideo = true
            return {...video}
        })

        if (!foundVideo)
            newViewingVideosList.push({name: videoName, time})

        user.data.videos = newViewingVideosList
        storage.set(String(userId), user)

        return true
    }

    getStore = () => {
        return Storage.getStorage(LongReadService.storageName)
    }
}

module.exports = LongReadService
