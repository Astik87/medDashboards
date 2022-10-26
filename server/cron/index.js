const {CronJob} = require('cron')

const edgeVisitVisdeos = require('./edgeVisitVisdeos')

const jobsList = [
    new CronJob(
        '0 21 * * *',
        edgeVisitVisdeos,
        null,
        true,
        'Europe/Moscow'
    )
]

module.exports = () => {
    jobsList.forEach(job => job.start())
}

