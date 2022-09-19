const jwt = require('jsonwebtoken');

module.exports = async function (req, res, next) {
    try {
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1]

        if(!token)
            return res.status(401).json({message: 'Вы не авторизованы'})

        req.user = await jwt.verify(token, process.env.SECRET_KEY)

        return next()
    } catch (e) {
        return res.status(401).json({message: 'Вы не авторизованы'})
    }
}
