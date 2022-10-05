class BaseStorage {
    storage = {}

    /**
     * Установить значение сегмента хранилища
     * @param {string} segmentName
     * @param {any} value
     */
    set(segmentName, value) {
        this.storage[segmentName] = value
    }

    /**
     * Получить сегмент хранилища
     * @param {string} segmentName
     * @returns {any|boolean}
     */
    get(segmentName) {
        return this.storage[segmentName] ? this.storage[segmentName] : false
    }

    /**
     * Удалить сегмент
     * @param {string} segmentName
     */
    delete(segmentName) {
        delete this.storage[segmentName]
    }

    /**
     * Получить хранилище
     * @returns {{}}
     */
    getStorage() {
        return this.storage
    }
}

module.exports = BaseStorage