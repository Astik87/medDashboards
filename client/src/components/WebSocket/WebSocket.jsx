import {useSnackbar} from "notistack"

import WSClient from "@/webSocket/WebSocketClient"
import {useContext} from "react";
import {Context} from "@/index";
import {observer} from "mobx-react";
import {formatDate} from "@utils/DateUtils";

const WebSocket = observer(() => {

    const {enqueueSnackbar} = useSnackbar()
    const {userState} = useContext(Context)

    if(!userState.isAuth)
        return ''

    if(WSClient.isOpen === false) {
        WSClient.onError = ({error, status}) => {
            enqueueSnackbar(`Error: ${error} Code: ${status}`, {variant: "error"})
        }
        WSClient.connection(process.env.REACT_APP_WS_URL)
        WSClient.addOnMessage('User', 'getNotifications', data => {
            if(!data.length)
                return false

            const notifications = data.map(({date, message}) => {
                date = formatDate(new Date(date))
                return {date, message}
            })

            userState.setNotifications(notifications)
        })
        WSClient.addOnClose(() => {
            enqueueSnackbar('Разорвано соединение с сервером', {variant: 'error'})
        })
        WSClient.addOnMessage('User', 'login', data => {
            WSClient.send('User', 'getNotifications')
        })
        WSClient.addOnMessage('User', 'notification', ({message}) => {
            enqueueSnackbar(message, {variant: 'info'})
        })
        WSClient.addOnOpen(() => {
            setInterval(() => {
                WSClient.send('User', 'pingPong')
            }, 60000)
        })
        WSClient.send('User', 'login', userState.user)
    }

    return ''
})

export default WebSocket