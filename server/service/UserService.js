const {Op} = require('sequelize')

const {User, UserFields, MedDirections} = require('../models')
const DateService = require('./DateService')
const DirectionsService = require('./DirectionsService')
const CitiesService = require('./CitiesService')

class UserService {
    /**
     * Регисрация пользователя
     * @param {string} email
     * @param {string} password
     * @returns {Promise<{}>} - Об
     */
    registration(email, password) {
        /* TODO Регистрация пользователя */
    }

    /**
     * Авторизация пользователя
     */
    login() {
        /* TODO Авторизация */
    }

    /**
     * Перезапись токенов
     */
    refresh() {
        /* TODO Обновление токена пользователя */
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
