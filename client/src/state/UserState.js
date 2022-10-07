import {makeAutoObservable} from 'mobx'

class UserState {
    constructor() {
        this._isAuth = false
        this._user = false
        this._notifications = false

        makeAutoObservable(this)
    }

    setIsAuth(isAuth) {
        this._isAuth = isAuth
    }

    setUser(user) {
        this._isAuth = !!user
        this._user = user
    }

    setNotifications(notifications) {
        this._notifications = notifications
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get notifications() {
        return this._notifications
    }

    logout() {
        this.setUser(false)
        this.setIsAuth(false)
        this.setNotifications(false)
    }

}

export default new UserState()
