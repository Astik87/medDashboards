import {makeAutoObservable} from 'mobx'

// 1172

class CRMState {
    constructor() {
        this._funnelAttraction = false
        this._bounceFunnel = false
        this._messagesCount = 0
        this._campaign = false
        this._event = 0
        this._usersList = 0

        makeAutoObservable(this)
    }

    get funnelAttraction() {
        return this._funnelAttraction
    }

    setFunnelAttraction(data) {
        this._funnelAttraction = data
        return this._funnelAttraction
    }

    get bounceFunnel() {
        return this._bounceFunnel
    }

    setBounceFunnel(data) {
        this._bounceFunnel = data
        return this._bounceFunnel
    }

    get messagesCount() {
        return this._messagesCount
    }

    setMessagesCount(count) {
        this._messagesCount = count
        return this._messagesCount
    }

    get event() {
        return this._event
    }

    setEvent = (event) => {
        this._event = event
        return this._event
    }

    get campaign() {
        return this._campaign
    }

    setCampaign = (campaign) => {
        this._campaign = campaign
        return this._campaign
    }

    get usersList() {
        return this._usersList
    }

    setUsersList = (usersList) => {
        this._usersList = usersList
        return this._usersList
    }

}

export default new CRMState()
