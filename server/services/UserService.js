const {Op} = require('sequelize')
const FormData = require('form-data')
const bcrypt = require('bcrypt')

const {User, UserFields, UserGroups, DashboardUser, MedDirections, EventRegistrations} = require('../models')
const DateService = require('./DateService')
const DirectionsService = require('./DirectionsService')
const CitiesService = require('./CitiesService')
const TokenService = require('./TokenService')
const ApiError = require('../utils/ApiError')

class UserService {

    /**
     * Получить список пользователей
     * @param {{eventId: number, directionId: number}} filter
     * @param {number} limit
     * @param {number} page
     * @returns {Promise<{count: number, rows: [{id: number, email: string, name: string, direction: string}]}>}
     */
    async getMedUsers(filter, limit = 25, page = 1) {

        limit = +limit
        page = +page

        if (!limit)
            limit = 25

        if (!page || page <= 0)
            page = 1

        const {eventId, directionId, userGroup} = filter

        const medDirectionsInclude = {
            attributes: [['UF_NAME', 'name']],
            model: MedDirections,
            required: true,
        }

        const userFieldsInclude = {
            attributes: ['UF_DIRECTION'],
            model: UserFields,
            required: true,
            include: [
                medDirectionsInclude
            ]
        }

        const visitsInclude = {
            attributes: ['ID','UF_USER'],
            model: EventRegistrations,
            required: true
        }

        const userGroupInclude = {
            attributes: ['GROUP_ID'],
            model: UserGroups,
            required: true
        }

        if (directionId)
            userFieldsInclude.where = {UF_DIRECTION: directionId}

        const include = [userFieldsInclude]

        if(eventId) {
            visitsInclude.where = {UF_EVENT: eventId}
            userFieldsInclude.include.push(visitsInclude)
        }

        if(userGroup) {
            userGroupInclude.where = {GROUP_ID: userGroup}
            include.push(userGroupInclude)
        }

        const query = {
            attributes: [['ID', 'id'], ['EMAIL', 'email'], ['NAME', 'name']],
            include,
            order: [['ID', 'DESC']],
            limit,
            offset: (page - 1) * limit
        }

        const users = await User.findAndCountAll(query)

        users.rows = users.rows.map(user => {
            user = user.toJSON()

            user.direction = user.b_uts_user.med_direction.name
            delete user.b_uts_user
            return user
        })

        return users

    }

    /**
     * Получить FormData пользователей для импорта в Unisender
     * @param {[{email: string}]} users
     * @param {number} listId id списка контактов из unisender
     * @returns {FormData}
     */
    getUsersFormDataForUnisender(users, listId) {
        if(!listId)
            throw ApiError.BadRequest('listId is required')

        if(!users.length)
            throw ApiError.BadRequest('The list of users is empty')

        const formData = new FormData()

        formData.append('field_names[0]', 'email')
        formData.append('field_names[1]', 'email_list_ids')

        users.forEach((user, index) => {
            formData.append(`data[${index}][0]`, user.email)
            formData.append(`data[${index}][1]`, listId)
        })

        return formData
    }

    async get(limit = 25, page = 1) {

        limit = +limit
        page = +page

        if (!limit)
            limit = 25

        if (!page || page <= 0)
            page = 1

        return await DashboardUser.findAndCountAll({
            attributes: [
                ['ID', 'id'],
                ['UF_NAME', 'name'],
                ['UF_LOGIN', 'login'],
                ['UF_IS_ADMIN', 'isAdmin']
            ],
            limit,
            offset: (page - 1) * limit
        })
    }

    async getGroups() {
        return await UserGroups.findAll({
            attributes: [['ID', 'value'], ['NAME', 'label']]
        })
    }

    /**
     * Регисрация пользователя
     * @param {string} name
     * @param {string} login
     * @param {string} password
     * @param {boolean} isAdmin
     * @returns {Promise<{}>} - Об
     */
    async create(name, login, password, isAdmin = false) {

        if (!name)
            throw new Error('Имя не может быть пустым')

        if (!login || login.length < 3)
            throw new Error('Логин не может быть меньше 3 симвалов')

        if (!password || password.length < 6)
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
            UF_PASSWORD_HASH: hashPassword,
            UF_IS_ADMIN: Boolean(isAdmin)
        })

        return {
            id: user.id,
            name,
            login
        }
    }

    /**
     * Авторизация пользователя
     */
    async login(login, password) {
        const user = await DashboardUser.findOne({
            attributes: [
                ['ID', 'id'],
                ['UF_LOGIN', 'login'],
                ['UF_NAME', 'name'],
                ['UF_PASSWORD_HASH', 'passwordHash'],
                ['UF_IS_ADMIN', 'isAdmin']
            ],
            where: {
                UF_LOGIN: login
            }
        })

        if (!user)
            throw Error(`Пользователь с логином ${login} не найден`)

        const jsonUser = user.toJSON()

        const isPasswordEquals = await bcrypt.compare(password, jsonUser.passwordHash)
        if (!isPasswordEquals)
            throw Error('Неверный пароль')

        const resUser = {
            id: jsonUser.id,
            name: jsonUser.name,
            login: jsonUser.login,
            isAdmin: jsonUser.isAdmin
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
        if (!refreshToken)
            return false

        const tokenService = new TokenService()
        const user = tokenService.verifyToken(refreshToken)
        const userData = await tokenService.findUserByToken(refreshToken)

        if (!user || !userData)
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

    async delete(userIds) {
        return await DashboardUser.destroy({
            where: {
                ID: {
                    [Op.in]: userIds
                }
            }
        })
    }
}

module.exports = UserService
