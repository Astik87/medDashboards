const {User} = require('../models')
const UserService = require('../services/UserService')
const jwt = require('jsonwebtoken')

class UserController {
    static async check(req, res) {
        const {email, password} = req.query

        if(!email || !password)
            return res.status(500).json({message: 'Email или пароль не могут быть пустыми'})

        const user = await User.findOne({where: {LOGIN: email}});

        if(!user)
            return res.status(500).json({message: 'Пользователь не найден'})

        const hash = await UserController.hashPassword('123456', '$6$gLyzakS7Aj2ZKr4q$vBa4/uLkyfC3boKKJawX3SSMT3WDbFdZRa6wobhIcGDvd/ftOTRAxlj/Bd./2A5AUeFZYpPQohTAvFEHdBMG.0')
        return res.json({hash})
    }

    static async getStatistic(req, res) {
        let {dateFrom, dateTo, directionId} = req.query

        dateFrom = new Date(dateFrom)
        dateTo = new Date(dateTo)

        const userService = new UserService()

        return res.json(await userService.getUserStatistic(dateFrom, dateTo, directionId))
    }
}

module.exports = UserController
