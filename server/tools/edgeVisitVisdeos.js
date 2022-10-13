const {Op} = require('sequelize')
const fs = require('fs')
const path = require('path')

const EdgeApi = require('../api/EdgeApi')

const {VisitStatistic} = require('../models')

const start = async () => {
    await fs.appendFileSync(path.resolve(__dirname, 'logs.txt'), 'edgeVisitVideos.js: ' + (new Date()).toString() + '\n')
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
}

start()