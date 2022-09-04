import React from "react"

import './style.css'
import notAva from './img/not-ava.svg'
import Notifications from "./Notifications"

const Profile = () => {
    return (
        <div className="header-profile">
            <div className="ava">
                <img src={notAva} alt="not-ava"/>
            </div>

            <div className="user-name">
                Карен Аютов
            </div>
            <Notifications/>
        </div>
    )
}

export default Profile
