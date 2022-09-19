import {makeAutoObservable} from 'mobx'

class CRMState {
    constructor() {
        this._chartData = false
        this._messagesCount = 0
        this._campaign = false
        this._event = 714

        makeAutoObservable(this)
    }

    get chartData() {
        return this._chartData
    }

    setChartData(data) {
        this._chartData = data
        return this._chartData
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

}

export default new CRMState()
