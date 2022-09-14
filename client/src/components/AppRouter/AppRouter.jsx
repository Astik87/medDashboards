import React, {useContext} from "react";
import {Routes, Route} from 'react-router-dom'

import {authRoutes, publicRoutes} from "@globals/Routes";
import {Context} from "@/index";
import Auth from "@pages/Auth";
import {observer} from "mobx-react";

const AppRouter = observer(() => {

    const {userState} = useContext(Context)
    const {isAuth} = userState

    return (
        <Routes>
            {publicRoutes.map(({path, Component}) => {
                return <Route key={path} path={path} element={Component}/>
            })}
            {authRoutes.map(({path, Component}) => {
                return <Route key={path} path={path} element={isAuth ? Component : <Auth />}/>
            })}
        </Routes>
    )
})

export default AppRouter
