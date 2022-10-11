require('dotenv').config()
const axios = require('axios')

const ApiError = require('../utils/ApiError')

class EdgeApi {
    host
    username
    password
    accessToken = false
    baseUrl = 'https://api.edgecenter.ru/'

    constructor() {
        this.username = process.env.EDGE_LOGIN
        this.password = process.env.EDGE_PASSWORD

        this.host = axios.create({
            baseURL: this.baseUrl
        })

        const authRequestInterceptor = async config => {
            if(!this.accessToken) {
                const tokens = await axios.default.post(`${this.baseUrl}/iam/auth/jwt/login`, {username: this.username, password: this.password})
                this.accessToken = 'Bearer ' + tokens.data.access
            }
            config.headers.Authorization = this.accessToken
            return config
        }

        this.host.interceptors.request.use(authRequestInterceptor)
    }

    async getVideos(page) {
        const response = await this.host.get('/streaming/videos/search', {params: {q: 'serv0', page}})

        if(response.data.error)
            throw ApiError.BadRequest(response.data.error)

        return response.data
    }
}

module.exports = new EdgeApi