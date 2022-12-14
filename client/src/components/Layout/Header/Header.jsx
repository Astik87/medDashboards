import React from "react"
import {Link} from "react-router-dom"

import Menu from "./Menu"

import './style.css'
import logo from './img/logo.svg'
import menuItems from "@globals/Menu"
import SearchInput from "./SearchInput"
import Profile from "./Profile"
import MobileHeader from "@components/Layout/MobileHeader"

const Header = () => {
    return (
        <header className="header">
            <div className="container d-flex jcsb">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                    </Link>
                </div>
                <div className="container--content header-content">
                    <Menu menuItems={menuItems}/>
                    <SearchInput/>
                    <Profile/>
                    <MobileHeader />
                </div>
            </div>
        </header>
    )
}

export default Header
