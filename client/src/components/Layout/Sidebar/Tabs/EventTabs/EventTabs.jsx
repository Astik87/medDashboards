import {Link, useLocation} from 'react-router-dom'
import {Tab} from '@mui/material'

import SidebarTabs from "@components/Layout/Sidebar/Tabs";

const EventIcon = () => {
    return (
        <Link
            to="/events">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18.999 22H4.99902C3.89445 22 2.99902 21.1046 2.99902 20V6C2.99902 4.89543 3.89445 4 4.99902 4H5.99902C6.55131 4 6.99902 3.55228 6.99902 3C6.99902 2.44772 7.44674 2 7.99902 2C8.55131 2 8.99902 2.44772 8.99902 3C8.99902 3.55228 9.44674 4 9.99902 4H13.999C14.5513 4 14.999 3.55228 14.999 3C14.999 2.44772 15.4467 2 15.999 2C16.5513 2 16.999 2.44772 16.999 3C16.999 3.55228 17.4467 4 17.999 4H18.999C20.1036 4 20.999 4.89543 20.999 6V20C20.999 21.1046 20.1036 22 18.999 22ZM5.99902 10C5.44674 10 4.99902 10.4477 4.99902 11V19C4.99902 19.5523 5.44674 20 5.99902 20H17.999C18.5513 20 18.999 19.5523 18.999 19V11C18.999 10.4477 18.5513 10 17.999 10H5.99902ZM5.99902 6C5.44674 6 4.99902 6.44772 4.99902 7C4.99902 7.55228 5.44674 8 5.99902 8H17.999C18.5513 8 18.999 7.55228 18.999 7C18.999 6.44772 18.5513 6 17.999 6H5.99902Z"/>
            </svg>
        </Link>
    )
}

const EventPromotionsIcon = () => {
    return (
        <Link to="/events-promotions">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM6 5C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5H6ZM17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16V11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11V16ZM13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V16ZM9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16V13C7 12.4477 7.44772 12 8 12C8.55228 12 9 12.4477 9 13V16Z"/>
            </svg>
        </Link>
    )
}

const routes = [
    {path: '/events', icon: <EventIcon/>},
    {path: '/events-promotions', icon: <EventPromotionsIcon/>},
]

const EventTabs = () => {

    const currentPath = useLocation().pathname

    let currentTabIndex = 0

    routes.forEach(({path}, index) => {
        if(path === currentPath)
            currentTabIndex = index
    })

    return (
        <SidebarTabs initValue={currentTabIndex}>
            {
                routes.map(({path, icon}) => {
                    return (
                        <Tab
                            key={path}
                            className={`sidebar-tab ${path === currentPath ? 'current' : ''}`}
                            icon={icon}/>
                    )
                })
            }
        </SidebarTabs>
    )
}

export default EventTabs