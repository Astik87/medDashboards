const {Op} = require('sequelize')
const fs = require('fs')
const path = require('path')

const EdgeApi = require('../api/EdgeApi')

const {VisitStatistic} = require('../models')

module.exports = async () => {
    const logFilePath = path.resolve(__dirname, '..', 'logs', 'edgeVisitVisdeos.txt')
    await fs.appendFileSync(logFilePath, 'START edgeVisitVideos.js: ' + (new Date()).toString() + '\n')
    try {
        const visits = await VisitStatistic.findAll({
            where: {
                UF_VIDEO_URLS: {
                    [Op.ne]: null
                }
            }
        })

        let edgeVideos = []

        let videos = []
        let page = 1

        do {
            videos = await EdgeApi.getVideos(page)
            edgeVideos = [...edgeVideos, ...videos]
            page++
        } while (videos.length)

        for (let visit of visits) {
            const urls = []
            edgeVideos.forEach(({id, name}) => {
                if(name.includes(visit.UF_ROOMID))
                    urls.push(`https://streaming.edgecenter.ru/video/editor/${id}`)
            })

            await visit.update({UF_VIDEO_URLS: urls.join(' ')})
        }
    } catch (error) {
        await fs.appendFileSync(logFilePath, error.toString()+'\n')
    }

    await fs.appendFileSync(logFilePath, 'END edgeVisitVideos.js: ' + (new Date()).toString() + '\n')
}