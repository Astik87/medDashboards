import {medtouchHost} from './Main'

class UserApi {
    login = async () => {
        medtouchHost.post('/api/auth')
    }
}
