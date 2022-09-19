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

    static async get(req, res, next) {
        try {
            const {limit, page} = req.query

            const userService = new UserService()
            const users = await userService.get(limit, page)
            return res.json(users)
        } catch (error) {
            next(error)
        }
    }

    static async create(req, res) {
        try {
            const {name, login, password, isAdmin} = req.body

            const userService = new UserService()
            const user = await userService.create(name, login, password, isAdmin)
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

    static async delete(req, res, next) {
        try {
            const {userIds} = req.body

            const userService = new UserService()
            const result = await userService.delete(userIds)

            return res.json(result)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController
