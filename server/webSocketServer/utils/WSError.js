class WSError extends Error {
    status

    constructor(status, message) {
        super(message);

        this.status = status
    }

    static BadRequest(message) {
        return new WSError(400, message)
    }

    static Unauthorized() {
        return new WSError(401, 'Вы не авторизованы')
    }

    static Forbidden() {
        return new WSError(403, 'Отказано в доступе')
    }
}

module.exports = WSError