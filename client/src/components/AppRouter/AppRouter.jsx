import React, {useContext} from "react";
import {Routes, Route} from 'react-router-dom'

import {adminRoutes, authRoutes, publicRoutes} from "@globals/Routes";
import {Context} from "@/index";
import Auth from "@pages/Auth";
import {observer} from "mobx-react";
import Forbidden from "@pages/Forbidden";

const checkUserAccesses = (pageCode, needAdminRole, user) => {
    if(needAdminRole || user.isAdmin)
        return user.isAdmin

    return user.accesses.indexOf(pageCode) !== -1
}

const AppRouter = observer(() => {

    const {userState} = useContext(Context)
    const {isAuth, user} = userState

    return (
        <Routes>
            {publicRoutes.map(({path, Component}) => {
                return <Route key={path} path={path} element={Component}/>
            })}
            {authRoutes.map(({path, code, Component}) => {
                let component = Component
                if(!isAuth)
                    component = <Auth/>
                else if(!checkUserAccesses(code, false, user))
                    component = <Forbidden />

                return <Route key={path} path={path} element={component}/>
            })}
            {adminRoutes.map(({path, Component}) => {
                return <Route key={path} path={path} element={checkUserAccesses(false, true, user) ? Component : <Forbidden/>}/>
            })}
        </Routes>
    )
})

export default AppRouter
