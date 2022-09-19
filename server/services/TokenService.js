const jwt = require('jsonwebtoken')

const {DashboardUser} = require('../models')

class TokenService {
    /**
     * Генерация токенов
     * @param payload
     * @return {{accessToken: string, refreshToken: string}}
     */
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '30d'})

        return {accessToken, refreshToken}
    }

    /**
     * Сохранить refreshToken в базу
     * @param userId
     * @param refreshToken
     * @return {boolean}
     */
    async saveToken(userId, refreshToken) {
        const user = await DashboardUser.findOne({
            where: {
                ID: userId
            }
        })

        if(!user)
            throw new Error(`Пользователь с id ${userId} не найден`)

        user.UF_REFRESH_TOKEN = refreshToken
        return await user.save()
    }

    /**
     * Удалить токен
     * @param refreshToken
     * @return {boolean}
     */
    async removeToken(refreshToken) {
        console.log(refreshToken)

        const user = await DashboardUser.findOne({
            where: {
                UF_REFRESH_TOKEN: refreshToken
            }
        })

        console.log(user)
        if(!user)
            return false

        const token = user.UF_REFRESH_TOKEN
        user.UF_REFRESH_TOKEN = ''
        await user.save()

        return token
    }

    /**
     * Валидация токена
     * @param token
     * @return {boolean}
     */
    verifyToken(token) {
        try {
            return jwt.verify(token, process.env.SECRET_KEY)
        } catch (error) {
            return false
        }
    }

    /**
     * Найти токен в базе
     * @param refreshToken
     */
    async findUserByToken(refreshToken) {
        return DashboardUser.findOne({
            where: {
                UF_REFRESH_TOKEN: refreshToken
            }
        })
    }
}

module.exports = TokenService
