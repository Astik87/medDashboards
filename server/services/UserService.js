const Sequelize = require('sequelize')
const {Op} = Sequelize
const DB = require('../db')
const FormData = require('form-data')
const bcrypt = require('bcrypt')

const {
    User,
    UserFields,
    UserGroup,
    Groups,
    DashboardUser,
    MedDirections,
    EventRegistrations,
    DashboardUserAccesses,
    NmoEntity
} = require('../models')
const DateService = require('./DateService')
const DirectionsService = require('./DirectionsService')
const CitiesService = require('./CitiesService')
const TokenService = require('./TokenService')
const ApiError = require('../utils/ApiError')

class UserService {

    async getUsersCountByGroups(dateFrom, dateTo, directionId, eventId) {
        const userVerifyStatusGroups = [
            {name: 'Верифицированные', groupIds: [11, 12], excludeGroupIds: []},
            {name: 'Полуверифицированные', groupIds: [13, 14, 15, 16], excludeGroupIds: []},
            {name: 'Прошли тест', groupIds: [12], excludeGroupIds: []},
        ]

        const result = {
            total: 0,
            groups: []
        }

        const userInclude = {
            attributes: ['ID'],
            model: User,
            where: {},
            required: true,
            include: []
        }

        const directionInclude = {
            attributes: ['UF_DIRECTION'],
            model: UserFields,
            required: true,
            where: {
                UF_DIRECTION: directionId
            }
        }

        const visitsInclude = {
            attributes: ['UF_USER', 'UF_EVENT'],
            model: EventRegistrations,
            required: true,
            as: 'UserVisits',
            where: {
                UF_EVENT: eventId
            }
        }

        if (directionId)
            userInclude.include.push(directionInclude)

        if (eventId)
            userInclude.include.push(visitsInclude)
        else
            userInclude.where.DATE_REGISTER = {
                [Op.gte]: dateFrom,
                [Op.lte]: dateTo
            }

        const baseQuery = {
            distinct: 'USER_ID',
            where: {},
            include: userInclude
        }

        for (let group of userVerifyStatusGroups) {
            baseQuery.where = {
                GROUP_ID: {
                    [Op.in]: group.groupIds,
                    [Op.ne]: group.excludeGroupIds
                }
            }

            const count = await UserGroup.count(baseQuery)

            result.groups.push({name: group.name, count: count})
        }

        const filedTestCount = result.groups[1].count - result.groups[2].count

        result.groups.push({name: 'Не прошли тест', count: filedTestCount < 0 ? 0 : filedTestCount })

        result.total = await User.count()

        return result
    }

    /**
     * Получить список пользователей
     * @param {{eventId: [number], directionId: number}} filter
     * @param {number} limit
     * @param {number} page
     * @param {boolean|{field: string, sort: string}} sort
     * @returns {Promise<{count: number, rows: [{id: number, email: string, name: string, direction: string}]}>}
     */
    async getMedUsers(filter, limit = 25, page = 1, sort = false) {

        limit = +limit
        page = +page

        if (!limit)
            limit = 25

        if (!page || page <= 0)
            page = 1

        const {eventId, directionId, userGroup} = filter

        const tableNames = {
            user: User.getTableName(),
            userFields: UserFields.getTableName(),
            medDirections: MedDirections.getTableName(),
            eventVisits: EventRegistrations.getTableName(),
            userGroup: UserGroup.getTableName(),
            nmoCodes: NmoEntity.getTableName(),
        }

        const attributes = [
            ['DISTINCT(`b_user`.`ID`)', '`id`'],
            ['`b_user`.`NAME`', '`name`'],
            ['`b_user`.`EMAIL`', '`email`'],
            ['`b_uts_user`.`UF_NMO_CODE`', '`nmoCode`'],
            ['`med_directions`.`UF_NAME`', '`directionName`']
        ]

        const includes = [
            [
                tableNames.userFields,
                [tableNames.user, 'ID'],
                [tableNames.userFields, 'VALUE_ID']
            ],
            [
                tableNames.medDirections,
                [tableNames.medDirections, 'ID'],
                [tableNames.userFields, 'UF_DIRECTION']
            ],
            [
                tableNames.nmoCodes,
                [tableNames.nmoCodes, 'UF_USER'],
                [tableNames.userFields, 'VALUE_ID']
            ]
        ]

        const where = []

        if (eventId && eventId.length) {
            includes.push([
                tableNames.eventVisits,
                [tableNames.user, 'ID'],
                [tableNames.eventVisits, 'UF_USER']
            ])

            where.push([[tableNames.eventVisits, 'UF_EVENT'], 'IN', '(' + eventId.join(',') + ')'])
        }

        if (directionId)
            where.push([[tableNames.medDirections, 'ID'], '=', directionId])

        if (userGroup && userGroup.length) {
            includes.push([
                tableNames.userGroup,
                [tableNames.user, 'ID'],
                [tableNames.userGroup, 'USER_ID']
            ])

            where.push([
                [tableNames.userGroup, 'GROUP_ID'],
                'IN',
                '(' + userGroup.join(',') + ')'
            ])
        }

        let select = 'SELECT '
        let query = ''

        const attributesQueryArray = attributes.map((attribute) => `${attribute[0]} AS ${attribute[1]}`)

        select += attributesQueryArray.join(',') + ' FROM `' + tableNames.user + '` '

        includes.forEach(([table, associated1, associated2]) => {
            return query += `INNER JOIN \`${table}\` ` +
                `ON \`${associated1[0]}\`.\`${associated1[1]}\` = \`${associated2[0]}\`.\`${associated2[1]}\` `
        })

        const whereQueryArray = where.map(([field, condition, value]) => (
            ` \`${field[0]}\`.\`${field[1]}\` ${condition} ${value} `
        ))

        if (whereQueryArray.length)
            query += 'WHERE ' + whereQueryArray.join('AND')

        const count = await DB.query(`SELECT COUNT(\`${tableNames.user}\`.\`ID\`) AS count FROM \`${tableNames.user}\` ` + query)

        if(sort) {
            if(sort.field === 'directionName')
                query += `ORDER BY \`${tableNames.medDirections}\`.\`UF_NAME\` ${sort.sort} `
            else if(sort.field === 'nmoCode')
                query += `ORDER BY \`${tableNames.userFields}\`.\`UF_NMO_CODE\` ${sort.sort} `
            else
                query += `ORDER BY \`${tableNames.user}\`.\`${sort.field}\` ${sort.sort} `
        } else {
            query += `ORDER BY \`${tableNames.user}\`.\`ID\` ASC `
        }
        query += `LIMIT ${(page - 1) * limit}, ${limit}`

        const users = await DB.query(select + query)

        return {rows: users[0], ...count[0][0]}

    }

    /**
     * Получить список кодов nmo
     * @param {{eventId: [number], directionId: number}} filter
     * @param {number} limit
     * @param {number} page
     * @param {boolean|{field: string, sort: string}} sort
     * @returns {Promise<{count: number, rows: [{id: number, email: string, name: string, direction: string, code: string, event: number}]}>}
     */
    async getNmoCodes(filter, limit = 25, page = 1, sort = false) {
        const where = {}
        const directionWere = {}

        if(filter.eventId)
            where.UF_EVENT = filter.eventId

        if(filter.directionId)
            directionWere.ID = filter.directionId

        const order = []
        const nmoFields = {id: 'ID', eventId: 'UF_EVENT', code: 'UF_XML_ID'}
        const userFields = {email: 'EMAIL', name: 'NAME'}
        const directionFields = {directionName: 'UF_NAME'}
        if(sort) {
            let models = false
            let field = false

            if(userFields[sort.field]) {
                models = [User]
                field = userFields[sort.field]
            }
            if(directionFields[sort.field]) {
                models = [User, UserFields, MedDirections]
                field = directionFields[sort.field]
            }

            if(models && field)
                order.push([...models, field, sort.sort])
            if(nmoFields[sort.field])
                order.push([nmoFields[sort.field], sort.sort])
        }

        const nmoCodesList = await NmoEntity.findAndCountAll({
            attributes: [['ID', 'id'], ['UF_EVENT', 'eventId'], ['UF_XML_ID', 'code']],
            where,
            include: {
                attributes: [['EMAIL', 'email'], ['NAME', 'name']],
                model: User,
                required: true,
                include: {
                    attributes: ['VALUE_ID'],
                    model: UserFields,
                    required: true,
                    include: {
                        attributes: [['UF_NAME', 'directionName']],
                        model: MedDirections,
                        where: {...directionWere},
                        required: true
                    }
                }
            },
            limit,
            offset: (page-1)*limit,
            order
        })

        nmoCodesList.rows = nmoCodesList.rows.map((nmoCode) => {
            nmoCode = nmoCode.toJSON()
            if(nmoCode.b_user) {
                nmoCode.email = nmoCode.b_user.email
                nmoCode.name = nmoCode.b_user.name

                if(nmoCode.b_user?.b_uts_user?.med_direction?.directionName)
                    nmoCode.directionName = nmoCode.b_user.b_uts_user.med_direction.directionName
            }

            delete nmoCode.b_user
            return nmoCode
        })

        return nmoCodesList
    }

    /**
     * Получить FormData пользователей для импорта в Unisender
     * @param {[{email: string}]} users
     * @param {number} listId id списка контактов из unisender
     * @returns {FormData}
     */
    getUsersFormDataForUnisender(users, listId) {
        if (!listId)
            throw ApiError.BadRequest('listId is required')

        if (!users.length)
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
        return await Groups.findAll({
            attributes: [['ID', 'value'], ['NAME', 'label']]
        })
    }

    /**
     * Проставляет коды НМО пользователям из массива usersList
     * @param {[{eventId: number, userId: number, nmo: string}]} usersList
     * @returns {Promise<{errors: string[]}>}
     */
    async importNmo(usersList) {

        const serializedUsersList = usersList.map(({eventId, userId, nmo}) => ({
            UF_USER: userId,
            UF_EVENT: eventId,
            UF_XML_ID: nmo
        }))

        const res = await NmoEntity.bulkCreate(serializedUsersList)

        return Boolean(res)
    }

    /**
     * Регисрация пользователя
     * @param {string} name
     * @param {string} login
     * @param {string} password
     * @param {[string]} accesses
     * @param {boolean} isAdmin
     * @returns {Promise<{}>} - Об
     */
    async create(name, login, password, accesses,  isAdmin = false) {

        if (!name)
            throw new Error('Имя не может быть пустым')

        if (!login || login.length < 3)
            throw new Error('Логин не может быть меньше 3 симвалов')

        if (!password || password.length < 6)
            throw new Error('Пароль не может быть меньше 6 симвалов')

        if (!accesses || !accesses.length)
            throw new Error('Выберите страницы к которым пользователь будет иметь доступ')

        const candidate = await DashboardUser.findOne({
            where: {
                UF_LOGIN: login
            }
        })

        if (candidate)
            throw new Error('Пользователь с таки логином уже зарегистрирован')

        const hashPassword = await bcrypt.hash(password, 3)
        let user = await DashboardUser.create({
            UF_NAME: name,
            UF_LOGIN: login,
            UF_PASSWORD_HASH: hashPassword,
            UF_IS_ADMIN: Boolean(isAdmin)
        })

        user = user.toJSON()

        DashboardUserAccesses.bulkCreate(accesses.map((code) => ({
            UF_USER: user.ID,
            UF_PAGE_CODE: code
        })))

        return {
            id: user.ID,
            name,
            login,
            accesses
        }
    }

    /**
     * Авторизация пользователя
     */
    async login(login, password) {
        const user = await DashboardUser.findOne({
            attributes: [
                ['ID', 'userId'],
                ['UF_LOGIN', 'login'],
                ['UF_NAME', 'name'],
                ['UF_PASSWORD_HASH', 'passwordHash'],
                ['UF_IS_ADMIN', 'isAdmin']
            ],
            where: {
                UF_LOGIN: login
            },
            include: {
                attributes: ['ID',['UF_PAGE_CODE', 'code']],
                model: DashboardUserAccesses,
                as: 'accesses'
            }
        })

        if (!user)
            throw Error(`Пользователь с логином ${login} не найден`)

        const jsonUser = user.toJSON()

        const isPasswordEquals = await bcrypt.compare(password, jsonUser.passwordHash)
        if (!isPasswordEquals)
            throw Error('Неверный пароль')

        const resUser = {
            id: jsonUser.userId,
            name: jsonUser.name,
            login: jsonUser.login,
            isAdmin: jsonUser.isAdmin,
            accesses: jsonUser.accesses ? jsonUser.accesses.map(({code}) => code) : []
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
            login: userData.UF_LOGIN,
            isAdmin: userData.UF_IS_ADMIN,
            accesses: userData.accesses ? userData.accesses.map((access) => access.toJSON().code) : []
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

        DashboardUserAccesses.destroy({where: {UF_USER: userIds}})

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
