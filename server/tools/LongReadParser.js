require('dotenv').config()
const {SingleBar, Presets} = require('cli-progress')
const {Op} = require('sequelize')
const sequelize = require('../db')
const unserialize = require('../utils/PHPUnserialize')

const {
    LongRead,
    LongReadStatistics,
    LongReadTests,
    LongReadTestAnswers,
    LongReadViewingVideos
} = require('../models')
const {delay} = require('../utils/Time')

class LongReadParser {
    limit = 50
    uploadItemTimeout = 0
    progressBar = new SingleBar({
        format: 'Progress {bar} {percentage}% || {value}/{total}'
    }, Presets.shades_classic)

    init = async () => {
        await sequelize.authenticate()
    }

    start = async () => {
        await this.init()

        const statisticsCount = await this.getStatisticsCount()
        let page = 1
        console.info('Items count: ', statisticsCount)
        this.progressBar.start(statisticsCount, 0)
        let currentUploadedItemsCount = 0
        for (let uploadItemsCount = 0; uploadItemsCount <= statisticsCount; uploadItemsCount += this.limit) {
            const statisticsList = await this.getStatistics(page, this.limit)

            for (let statistic of statisticsList) {
                statistic = statistic.toJSON()

                const res = await this.uploadStatistic(statistic)

                if(!res) {
                    console.error('Upload error')
                    console.error(statistic)
                    console.log('\n')
                }

                await delay(this.uploadItemTimeout)
                currentUploadedItemsCount++
                this.progressBar.update(currentUploadedItemsCount)
            }
            page++
        }
    }

    /**
     *
     * @param {{
     *     user: number,
     *     connectionTime: string,
     *     closeConnectionTime: string,
     *     fullTime: number,
     *     viewingPercent: number,
     *     estimation: string,
     *     test: string,
     *     viewingVideo: number,
     *     pageName: string,
     *     downloadedFiles: string
     * }} statistic
     * @returns {Promise<boolean>}
     */
    uploadStatistic = async (statistic) => {
        const t = await sequelize.transaction();
        try {
            const longRead = await LongReadStatistics.create({
                UF_USER: statistic.user,
                UF_CONNECT_TIME: statistic.connectionTime,
                UF_CLOSE_TIME: statistic.closeConnectionTime,
                UF_FULL_TIME: statistic.fullTime,
                UF_VIEWING_PERC: statistic.viewingPercent,
                UF_PAGE_NAME: statistic.pageName,
                UF_LINKS: '',
                UF_DOWNLOADED_FILES: unserialize(statistic.downloadedFiles) ? JSON.stringify(unserialize(statistic.downloadedFiles)) : ''
            })

            const longReadTests = unserialize(statistic.test)

            if(longReadTests.length) {
                const longReadTest = await LongReadTests.create({
                    UF_LONG_READ: longRead.ID,
                    UF_NAME: 'Тест',
                })

                await LongReadTestAnswers.create({
                    UF_QUESTION: 'Все вопросы',
                    UF_TEST: longReadTest.ID,
                    UF_ANSWER: JSON.stringify(longReadTests)
                })
            }

            const longReadEstimation = unserialize(statistic.estimation)
            if(longReadEstimation.length) {
                const longReadEstimation = await LongReadTests.create({
                    UF_LONG_READ: longRead.ID,
                    UF_NAME: 'Оценка контроля'
                })

                await LongReadTestAnswers.create({
                    UF_QUESTION: 'Все вопросы',
                    UF_TEST: longReadEstimation.ID,
                    UF_ANSWER: JSON.stringify(longReadEstimation)
                })
            }

            if (statistic.viewingVideo) {
                let videoName = 'Видеообращение: Камаев Андрей Вячеславович'

                if (statistic.pageName === 'Дисплазия молочной железы')
                    videoName = 'Инструментальные исследования в маммологии'

                await LongReadViewingVideos.create({
                    UF_NAME: videoName,
                    UF_TIME: statistic.viewingVideo,
                    UF_LONG_READ: longRead.ID
                })
            }

            await t.commit()
            return true
        } catch (error) {
            await t.rollback()
            return false
        }
    }

    getStatisticsCount = async () => {
        return await LongRead.count()
    }

    /**
     *
     * @param {number} page
     * @param {number} limit
     * @returns {Promise<{
     *     user: number,
     *     connectionTime: string,
     *     closeConnectionTime: string,
     *     fullTime: number,
     *     viewingPercent: number,
     *     estimation: string,
     *     test: string,
     *     viewingVideo: number,
     *     pageName: string,
     *     downloadedFiles: string
     * }[]>}
     */
    getStatistics = async (page, limit) => {
        const res = await LongRead.findAll({
            attributes: [
                ['UF_USER', 'user'],
                ['UF_CONNECT_TIME', 'connectionTime'],
                ['UF_CLOSE_TIME', 'closeConnectionTime'],
                ['UF_FULL_TIME', 'fullTime'],
                ['UF_VIEWING_PERC', 'viewingPercent'],
                ['UF_ESTIMATION', 'estimation'],
                ['UF_TEST', 'test'],
                ['UF_VIEWED_VIDEO', 'viewingVideo'],
                ['UF_PAGE', 'pageName'],
                ['UF_DOWNLOADED_FILES', 'downloadedFiles']
            ],
            limit,
            offset: (page - 1) * limit
        })

        return res
    }
}

module.exports = new LongReadParser()
