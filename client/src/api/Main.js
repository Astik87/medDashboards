import axios from "axios";

const host = axios.create({
    baseURL: process.env.REACT_APP_DOMAIN_NAME
})

const medtouchHost = axios.create({
    baseURL: process.env.MEDTOUCH_DOMAIN_NAME
})

// const authInterceptor = config => {
//     config.headers.authorization = 'Bearer ' + localStorage.getItem('token')
// }
//
// host.interceptors.request.use(authInterceptor)

export {
    host,
    medtouchHost,
    // authInterceptor
}
