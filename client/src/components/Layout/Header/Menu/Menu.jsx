import React from "react";
import {useLocation} from 'react-router-dom'
import {Link} from "react-router-dom";

import './style.css'

const Menu = (props) => {
    const {menuItems, onClick} = props

    const currentPage = useLocation()

    return (
        <ul className="menu" onClick={() => {onClick && onClick()}}>
            {menuItems.map((item, key) => {
                let isCurrentPath = currentPage.pathname === item.link
                if(item.tabsList && !isCurrentPath)
                    item.tabsList.forEach((tabPath) => {
                        if(!isCurrentPath)
                            isCurrentPath = currentPage.pathname === tabPath
                    })

                return (
                    <li key={key} className={`menu-item ${isCurrentPath ? 'current' : ''}`}>
                        <Link to={item.link}>{item.text}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Menu
