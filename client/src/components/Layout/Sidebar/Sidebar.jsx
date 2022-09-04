import React from "react"
import {Routes, Route} from 'react-router-dom'
import {sidebarRoutes} from "@globals/Routes";

import './style.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Routes>
                {
                    sidebarRoutes.map(({path, Component}) => <Route exact  key={path} path={path} element={Component}/>)
                }
            </Routes>
        </div>
    )
}

export default Sidebar
