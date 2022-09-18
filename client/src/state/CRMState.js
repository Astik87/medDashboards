import {makeAutoObservable} from 'mobx'

class CRMState {
    constructor() {
        this._chartData = false
        this._messagesCount = 0

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

}

export default new CRMState()
