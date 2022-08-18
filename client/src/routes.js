import React from "react"

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import LongRead from "./pages/LongRead";

export const authRoutes = [
    {
        path: '/',
        Component: <Home />
    },
    {
        path: '/long-read',
        Component: <LongRead />
    }
]

export const publicRoutes = [
    {
        path: '*',
        Component: <NotFound />
    }
]
