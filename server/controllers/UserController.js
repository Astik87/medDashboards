const UserService = require('../services/UserService')

class UserController {
    static setCookieToken(res, refreshToken) {
        res.cookie('refreshToken', refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
    }

    static async getUsersCountByGroups(req, res, next) {
        try {
            const {dateFrom, dateTo, eventId, directionId} = req.query
            const userService = new UserService()
            const result = await userService.getUsersCountByGroups(dateFrom, dateTo, directionId, eventId)

            return res.json(result)
        } catch (error) {
            next(error)
        }
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

    static async getMedUsers(req, res, next) {
        try {
            let {eventId, directionId, userGroup, limit, page, sort} = req.query

            if(sort) sort = JSON.parse(sort)
            else sort = false

            const userService = new UserService()
            const users = await userService.getMedUsers({eventId, directionId, userGroup}, limit, page, sort)

            return res.json(users)
        } catch (error) {
            next(error)
        }
    }

    static async importNmo(req, res, next) {
        try {
            const {usersList} = req.body

            const userService = new UserService()
            const result = await userService.importNmo(usersList)

            return res.json(result)
        } catch (error) {
            next(error)
        }
    }

    static async deleteNmoCodes(req, res, next) {
        try {
            const {codeIds} = req.body

            const userService = new UserService()
            const result = userService.deleteNmoCodes(codeIds)

            return res.json(result)
        } catch (error) {
            next(error)
        }
    }

    static async getGroups(req, res, next) {
        try {
            const userService = new UserService()
            const groups = await userService.getGroups()

            return res.json(groups)
        } catch (error) {
            next(error)
        }
    }

    static async create(req, res) {
        try {
            const {name, login, password, accesses, isAdmin} = req.body

            const userService = new UserService()
            const user = await userService.create(name, login, password, accesses, isAdmin)
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

    static async getNmoCodes(req, res, next) {
        try {
            let {eventId, directionId, limit, page, sort} = req.query

            if(sort) sort = JSON.parse(sort)
            else sort = false

            const userService = new UserService()

            directionId = Number(directionId) || false
            limit = Number(limit) || 25
            page = Number(page) || 1

            const nmoCodes = await userService.getNmoCodes({eventId, directionId}, limit, page, sort)

            return res.json(nmoCodes)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController
