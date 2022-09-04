import React from "react";
import {Routes, Route} from 'react-router-dom'

import {authRoutes, publicRoutes} from "@globals/Routes";

const AppRouter = () => {

    return (
        <Routes>
            {authRoutes.map(({path, Component}) => {
                return <Route key={path} path={path} element={Component}/>
            })}
            {publicRoutes.map(({path, Component}) => {
                return <Route key={path} path={path} element={Component}/>
            })}
        </Routes>
    )
}

export default AppRouter
