import React from "react"

import NotFound from "./pages/NotFound";
import Medtouch from "./pages/Medtouch";
import LongRead from "./pages/LongRead";
import Events from "./pages/Events";
import Visits from "./pages/Visits";

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
    },
    {
        path: '/visits',
        Component: <Visits />
    },
    {
        path: '/visits/:page',
        Component: <Visits />
    }
]

export const publicRoutes = [
    {
        path: '*',
        Component: <NotFound />
    }
]
