import {
    Divider,
    Box,
    List,
    ListItem,
    Button
} from '@mui/material'
import './style.css'

const NotificationItem = ({date, message}) => {
    return (
        <>
            <ListItem>
                <div className="notification-item">
                    <div className="notification-item__message">
                        {message}
                    </div>
                    <div className="notification-item__date">
                        {date}
                    </div>
                </div>
            </ListItem>
            <Divider/>
        </>
    )
}

const NotificationsList = ({notifications}) => {
    return (
        <List
            className="notifications-list">
            {
                notifications
                &&
                notifications.map((item) => <NotificationItem {...item} />)
            }
        </List>
    )
}

export default NotificationsList