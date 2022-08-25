import React from "react"

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import LongRead from "./pages/LongRead";
import Events from "./pages/Events";

export const authRoutes = [
    {
        path: '/',
        Component: <Home />
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
