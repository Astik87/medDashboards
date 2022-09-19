import React, {useContext} from "react"

import './style.css'

import {observer} from "mobx-react";
import {Context} from "@/index";
import AuthProfile from "@components/Layout/Header/Profile/AuthProfile";
import NotAuthProfile from "@components/Layout/Header/Profile/NotAuthProfile";

const Profile = observer(() => {

    const {userState} = useContext(Context)
    const {isAuth, user} = userState

    return (
        <div className="header-profile">
            {
                isAuth
                    ?
                    <AuthProfile user={user}/>
                    :
                    <NotAuthProfile/>
            }
        </div>
    )
})

export default Profile
