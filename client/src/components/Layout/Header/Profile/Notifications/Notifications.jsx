import React, {useState} from "react"

import './style.css'
import notification from './img/notification.svg'
import {Button, Drawer} from "@mui/material";
import NotificationsList from "./NotificationsList";
import UserState from "@/state/UserState";
import WSClient from "@/webSocket/WebSocketClient";
import {observer} from "mobx-react";

const Notifications = observer(() => {

    const [open, setOpen] = useState(false)

    const {notifications} = UserState

    const closeNotificationsList = () => {
        setOpen(false)
        if(notifications.length)
            UserState.setNotifications(false)

        WSClient.send('User', 'deleteUserNotifications')
    }

    return (
        <>
            <Button onClick={() => setOpen(true)}>
                <div className={`notifications ${notifications ? 'has-notifications' : ''}`}>
                    <img src={notification} alt=""/>
                </div>
            </Button>
            <Drawer
                anchor="right"
                open={open}
                onClose={closeNotificationsList}>
                <NotificationsList notifications={notifications} />
            </Drawer>
        </>
    )
})
export default Notifications
