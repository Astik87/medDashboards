const {User} = require('../models')
const jwt = require('jsonwebtoken')

class UserController {
    static async check(req, res) {
        const {email, password} = req.body

        if(!email || !password)
            return res.status(500).json({message: 'Email или пароль не могут быть пустыми'})

        const user = await User.findOne({where: {LOGIN: email}});

        if(!user)
            return res.status(500).json({message: 'Пользователь не найден'})

        const hash = await UserController.hashPassword('123456', '$6$gLyzakS7Aj2ZKr4q$vBa4/uLkyfC3boKKJawX3SSMT3WDbFdZRa6wobhIcGDvd/ftOTRAxlj/Bd./2A5AUeFZYpPQohTAvFEHdBMG.0')
        return res.json({hash})
    }
}

module.exports = UserController
