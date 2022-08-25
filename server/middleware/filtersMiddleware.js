module.exports = function (req, res, next) {
    let {dateFrom, dateTo, eventId} = req.body

    if(!eventId) {
        if(!dateFrom || !dateTo)
            return res.status(400).json({message: 'Параметры dateFrom и dateTo являются обязательными'})

        dateFrom = new Date(dateFrom)
        dateTo = new Date(dateTo)

        if(dateTo < dateFrom)
            return res.status(400).json({message: 'dateTo не может быть меньше dateFrom'})
    }

    return next()
}
