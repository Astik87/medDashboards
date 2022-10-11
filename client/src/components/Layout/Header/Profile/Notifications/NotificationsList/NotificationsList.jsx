import {
    Divider,
    List,
    ListItem
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
                notifications.map((item, index) => <NotificationItem key={index} {...item} />)
            }
        </List>
    )
}

export default NotificationsList