const BaseStorage = require('./BaseStorage')

class Storage {
    storage

    constructor() {
        this.storage = require('./storage')
    }

    /**
     * Получить хранилище
     * @param {string} storeName
     * @returns {BaseStorage}
     */
    getStorage = (storeName) => {

        if(!storeName)
            throw Error(`storageName is undefined`)

        if(!this.storage[storeName])
            throw Error(`Storage named '${storeName}' not found`)

        return this.storage[storeName]
    }

    /**
     * Установить новое значение хранилища
     * @param {string} storeName
     * @param {BaseStorage} value
     */
    setStorage(storeName, value) {
        if(!storeName)
            throw Error('storageName is undefined')

        if(!(value instanceof BaseStorage))
            throw Error('Value is not instanceof BaseStorage')

        this.storage[storeName] = value
    }
}

module.exports = new Storage()