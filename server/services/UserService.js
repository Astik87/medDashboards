const {Op} = require('sequelize')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const {User, UserFields, DashboardUser, MedDirections} = require('../models')
const DateService = require('./DateService')
const DirectionsService = require('./DirectionsService')
const CitiesService = require('./CitiesService')
const TokenService = require('./TokenService')

class UserService {
    /**
     * Регисрация пользователя
     * @param {string} name
     * @param {string} login
     * @param {string} password
     * @returns {Promise<{}>} - Об
     */
    async registration(name, login, password) {

        if (!name)
            throw new Error('Имя не может быть пустым')

        if(!login || login.length < 3)
            throw new Error('Логин не может быть меньше 3 симвалов')

        if(!password || password.length < 6)
            throw new Error('Пароль не может быть меньше 6 симвалов')

        const candidate = await DashboardUser.findOne({
            where: {
                UF_LOGIN: login
            }
        })

        if (candidate)
            throw new Error('Пользователь с таки логином уже зарегистрирован')

        const hashPassword = await bcrypt.hash(password, 3)
        const user = await DashboardUser.create({
            UF_NAME: name,
            UF_LOGIN: login,
            UF_PASSWORD_HASH: hashPassword
        })

        const tokenService = new TokenService()
        const {accessToken, refreshToken} = tokenService.generateTokens({id: user.ID, name, login})
        await tokenService.saveToken(user.ID, refreshToken)

        return {
            id: user.id,
            name,
            login,
            accessToken,
            refreshToken
        }
    }

    /**
     * Авторизация пользователя
     */
    async login(login, password) {
        const user = await DashboardUser.findOne({
            attributes: [['ID', 'id'], ['UF_LOGIN', 'login'], ['UF_NAME', 'name'], ['UF_PASSWORD_HASH', 'passwordHash']],
            where: {
                UF_LOGIN: login
            }
        })

        if(!user)
            throw Error(`Пользователь с логином ${login} не найден`)

        const jsonUser = user.toJSON()

        const isPasswordEquals = await bcrypt.compare(password, jsonUser.passwordHash)
        if(!isPasswordEquals)
            throw Error('Неверный пароль')

        const resUser = {
            id: jsonUser.id,
            name: jsonUser.name,
            login: jsonUser.login,
        }

        const tokenService = new TokenService()
        const {accessToken, refreshToken} = tokenService.generateTokens(resUser)
        tokenService.saveToken(resUser.id, refreshToken)

        return {
            accessToken,
            refreshToken,
            ...resUser
        }
    }

    /**
     *
     * @param {string} refreshToken
     * @return {Promise<*>}
     */
    async logout(refreshToken) {
        const tokenService = new TokenService()
        return await tokenService.removeToken(refreshToken)
    }

    /**
     * Перезапись токенов
     */
    async refresh(refreshToken) {
        if(!refreshToken)
            return false

        const tokenService = new TokenService()
        const user = tokenService.verifyToken(refreshToken)
        const userData = await tokenService.findUserByToken(refreshToken)

        if(!user || !userData)
            return false

        const resUser = {
            id: userData.ID,
            name: userData.UF_NAME,
            login: userData.UF_LOGIN
        }
        const tokens = tokenService.generateTokens(resUser)
        await tokenService.saveToken(resUser.id, tokens.refreshToken)

        return {
            ...tokens,
            ...resUser
        }
    }

    /**
     * Получить статистику по зарегестрированым пользователям
     * @param {Date} dateFrom
     * @param {Date} dateTo
     * @param {number} directionId
     * @return {Promise<{
     *              total: number,
     *              cities: {
     *                  name: string,
     *                  count: number
     *              },
     *              directions: {
     *                  name: string,
     *                  count: number
     *              },
     *              registeredByDates: [{
     *                  label: string,
     *                  value: number
     *              }]
     *          }>}
     */
    async getUserStatistic(dateFrom, dateTo, directionId) {
        const where = {
            user: {
                DATE_REGISTER: {
                    [Op.gte]: dateFrom,
                    [Op.lte]: dateTo
                }
            },
            userFields: {}
        }

        if (directionId)
            where.userFields.UF_DIRECTION = directionId

        const users = await User.findAll({
            attributes: [['DATE_REGISTER', 'registrationDate'], ['PERSONAL_CITY', 'userCity']],
            where: where.user,
            include: {
                attributes: ['UF_DIRECTION'],
                model: UserFields,
                where: where.userFields,
                required: true,
                include: {
                    attributes: [['UF_NAME', 'directionName']],
                    model: MedDirections,
                }
            }
        })

        const beforeCountQuery = {
            where: {
                DATE_REGISTER: {
                    [Op.lte]: dateFrom
                }
            }
        }

        if (directionId)
            beforeCountQuery.include = {
                model: UserFields,
                where: {
                    UF_DIRECTION: directionId ? directionId : {[Op.ne]: -1}
                },
                required: true
            }

        let beforeCount = await User.count(beforeCountQuery)

        const res = {
            total: users.length,
            cities: [],
            directions: [],
            registeredByDates: []
        }

        const registeredByDates = DateService.getDatesForStatisticByPeriod(dateFrom, dateTo)

        const citiesServiceForStatistic = CitiesService.getCitiesForStatistic()
        const directionsServiceForStatistic = DirectionsService.getDirectionsForStatistic()

        users.forEach((user) => {
            user = user.toJSON()

            registeredByDates.indexValue(new Date(user.registrationDate))

            const directionName = user.b_uts_user.med_direction ? user.b_uts_user.med_direction.directionName : false
            directionsServiceForStatistic.indexValue(directionName)
            citiesServiceForStatistic.indexValue(user.userCity)
        })

        res.cities = citiesServiceForStatistic.getStatisticResult()
        res.directions = directionsServiceForStatistic.getStatisticResult()

        res.registeredByDates = registeredByDates.getResStatistic().map(({label, value}) => {
            value += beforeCount
            beforeCount = value

            return {label, value}
        })

        return res
    }
}

module.exports = UserService
