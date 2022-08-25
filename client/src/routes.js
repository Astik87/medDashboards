import React from "react"

import NotFound from "./pages/NotFound";
import Medtouch from "./pages/Medtouch";
import LongRead from "./pages/LongRead";
import Events from "./pages/Events";

export const authRoutes = [
    {
        path: '/medtouch',
        Component: <Medtouch />
    },
    {
        path: '/long-read',
        Component: <LongRead />
    },
    {
        path: '/events',
        Component: <Events />
    }
]

export const publicRoutes = [
    {
        path: '*',
        Component: <NotFound />
    }
]
