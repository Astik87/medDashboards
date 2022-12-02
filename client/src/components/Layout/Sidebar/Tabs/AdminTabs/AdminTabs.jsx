import SidebarTabs from "@components/Layout/Sidebar/Tabs";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import {Tab} from "@mui/material";
import {useLocation} from "react-router-dom";
import {Link} from 'react-router-dom'

const UsersTab = () => {
    return (
        <Link to="/admin">
            <PeopleOutlineIcon />
        </Link>
    )
}

const MedTouchUsersTab = () => {
    return (
        <Link to="/admin/nmo-codes">
            <PeopleOutlineIcon />
        </Link>
    )
}

const UnisenderTab = () => {
    return (
        <Link to="/admin/unisender">
            <MailOutlineIcon />
        </Link>
    )
}

const ParsersTab = () => {
    return (
        <Link to="/admin/parsers">
            <ContentPasteSearchIcon />
        </Link>
    )
}

const routes = [
    {path: '/admin', icon: <UsersTab />},
    {path: '/admin/med-users', icon: <MedTouchUsersTab />},
    {path: '/admin/unisender', icon: <UnisenderTab />},
    {path: '/admin/parsers', icon: <ParsersTab />},
]

const AdminTabs = () => {
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
                    const isCurrent = currentPath === path
                    return <Tab key={path} icon={icon} className={`sidebar-tab ${isCurrent ? 'current' : ''}`} />
                })
            }
        </SidebarTabs>
    )
}

export default AdminTabs