import React, {useState} from "react";
import {Link} from 'react-router-dom'
import {
    Avatar,
    Menu,
    MenuItem,
    List,
    ListItem
} from "@mui/material";

import Notifications from "../Notifications";
import UserApi from "@api/UserApi";

const AuthProfile = (props) => {
    const {user} = props

    const [anchorEl, setAnchorEl] = useState(null)

    const menuIsOpen = Boolean(anchorEl)

    const openMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const closeMenu = () => {
        setAnchorEl(null)
    }

    const logout = async () => {
        await UserApi.logout()
        closeMenu()
    }

    return (
        <List>
            <ListItem
                className="profile-list"
                button
                onClick={openMenu}>
                <div className="ava">
                    <Avatar className="ava-image">
                        {user.name[0]}
                    </Avatar>
                </div>
                <div className="user-name">
                    {user.name}
                </div>
                <Notifications/>
            </ListItem>
            <Menu
                onClose={closeMenu}
                open={menuIsOpen}
                anchorEl={anchorEl}>
                <MenuItem
                    onClick={closeMenu}>
                    <Link
                        to="/admin">
                        Админ панель
                    </Link>
                </MenuItem>
                <MenuItem
                    onClick={logout}>
                    Выйти
                </MenuItem>
            </Menu>
        </List>
    )
}

export default AuthProfile
