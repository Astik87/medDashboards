import React from "react"
import {Routes, Route} from 'react-router-dom'
import sidebarRoutes from "./sidebarRoutes";

import './style.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Routes>
                {
                    sidebarRoutes.map(({path, Component}) => <Route key={path} path={path} element={Component}/>)
                }
            </Routes>
        </div>
    )
}

export default Sidebar
