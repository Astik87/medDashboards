const {User} = require('../models')
const UserService = require('../services/UserService')
const jwt = require('jsonwebtoken')

class UserController {
    static setCookieToken(res, refreshToken) {
        res.cookie('refreshToken', refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
    }

    static async getStatistic(req, res) {
        let {dateFrom, dateTo, directionId} = req.query

        dateFrom = new Date(dateFrom)
        dateTo = new Date(dateTo)

        const userService = new UserService()

        return res.json(await userService.getUserStatistic(dateFrom, dateTo, directionId))
    }

    static async registration(req, res) {
        try {
            const {name, login, password} = req.body

            const userService = new UserService()
            const user = await userService.registration(name, login, password)
            UserController.setCookieToken(res, user.refreshToken)
            return res.json(user)
        } catch (error) {
            return res.status(400).json({message: error.message})
        }
    }

    static async login(req, res) {
        const {login, password} = req.body
        const userService = new UserService()
        try {
            const userData = await userService.login(login, password)
            UserController.setCookieToken(res, userData.refreshToken)
            return res.json(userData)
        } catch (error) {
            return res.status(400).json({message: error.message})
        }
    }

    static async logout(req, res) {
        try {
            const userService = new UserService()
            const {refreshToken} = req.cookies
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json({token})
        } catch (error) {
            return res.status(400).json({message: error.message})
        }
    }

    static async refresh(req, res) {
        try {
            const {refreshToken} = req.cookies
            const userService = new UserService()
            const user = await userService.refresh(refreshToken)

            if(!user)
                return res.status(401).json({message: 'Вы не авторизованы'})

            UserController.setCookieToken(res, user.refreshToken)
            return res.json({...user})
        } catch (error) {
            return res.json({message: error.message})
        }
    }
}

module.exports = UserController
