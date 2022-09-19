const jwt = require('jsonwebtoken')

const {DashboardUser} = require('../models')
const ApiError = require('../utils/ApiError')

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1]

        if(!token)
            return res.status(401).json({message: 'Вы не авторизованы'})

        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        let user = await DashboardUser.findOne({
            attributes: [
                ['ID', 'id'],
                ['UF_LOGIN', 'login'],
                ['UF_NAME', 'name'],
                ['UF_PASSWORD_HASH', 'passwordHash'],
                ['UF_IS_ADMIN', 'isAdmin']
            ],
            where: {
                id: decoded.id
            }
        })

        user = user.toJSON()

        if(!user)
            return res.status(401).json({message: 'Вы не авторизованы'})

        if(!user.isAdmin)
            return res.status(403).json({message: 'Доступ запрещен'})

        req.user = user
        return next()
    } catch (e) {
        console.log(e)
        return res.status(401).json({message: 'Вы не авторизованы'})
    }
}
