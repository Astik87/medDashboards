import React from "react"

import LongReadTab from "@components/Layout/Sidebar/Tabs/LongReadTab";
import WavesTabs from "@components/Layout/Sidebar/Tabs/WavesTabs";
import NotFoundTab from "@components/Layout/Sidebar/Tabs/NotFoundTab";

import NotFound from "@pages/NotFound";
import Medtouch from "@pages/Medtouch";
import LongRead from "@pages/LongRead";
import Events from "@pages/Events";
import VisitPlan from "@pages/VisitPlan";
import EventPlans from "@pages/EventPlans";
import LongReadPlans from "@pages/LongReadPlans";
import Waves from "@pages/Waves";

const authRoutes = [
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
        path: '/waves',
        Component: <Waves />
    },
    {
        path: '/waves/visit-plans',
        Component: <VisitPlan baseUri="/visits" />
    },
    {
        path: '/visits/:page',
        Component: <VisitPlan baseUri="/visits" />
    },
    {
        path: '/waves/event-plans',
        Component: <EventPlans />
    },
    {
        path: '/waves/long-read-plans',
        Component: <LongReadPlans />
    }
]

const publicRoutes = [
    {
        path: '*',
        Component: <NotFound />
    }
]


const sidebarRoutes = [
    {path: '/long-read', Component: <LongReadTab/>},
    {path: "/waves", Component: <WavesTabs/>},
    {path: "/waves/visit-plans", Component: <WavesTabs/>},
    {path: "/waves/event-plans", Component: <WavesTabs/>},
    {path: "/waves/long-read-plans", Component: <WavesTabs/>},
    {path: '*', Component: <NotFoundTab/>}
]


export {
    publicRoutes,
    authRoutes,
    sidebarRoutes
}
