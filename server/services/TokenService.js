class TokenService {
    /**
     * Генерация токенов
     * @param payload
     * @return {{accessToken: string, refreshToken: string}}
     */
    generateTokens(payload) {
        /* TODO Генерация access и refresh токенов */
    }

    /**
     * Сохранить refreshToken в базу
     * @param userId
     * @param refreshToken
     * @return {boolean}
     */
    saveToken(userId, refreshToken) {
        /* TODO Сохранение refresh токена в базу */
    }

    /**
     * Удалить токен
     * @param refreshToken
     * @return {boolean}
     */
    removeToken(refreshToken) {
        /* TODO Удаление refresh токена из базы */
    }

    /**
     * Валидация accessToken
     * @param token
     * @return {boolean}
     */
    validateAccessToken(token) {
        /* TODO Валидация access токена */
    }

    /**
     * Валидация refreshToken
     * @param token
     * @return {boolean}
     */
    validateRefreshToken(token) {
        /* TODO Валидация refresh токена */
    }

    /**
     * Найти токен в базе
     * @param refreshToken
     */
    findToken(refreshToken) {
        /* TODO Поиск токена в базе */
    }
}
