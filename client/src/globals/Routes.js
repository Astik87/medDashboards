import React from "react"

import LongReadTab from "@components/Layout/Sidebar/Tabs/LongReadTab";
import WavesTabs from "@components/Layout/Sidebar/Tabs/WavesTabs";
import NotFoundTab from "@components/Layout/Sidebar/Tabs/NotFoundTab";

import NotFound from "@pages/NotFound";
import Home from "@pages/Home";
import LongRead from "@pages/LongRead";
import Events from "@pages/Events";
import VisitPlan from "@pages/VisitPlan";
import EventPlans from "@pages/EventPlans";
import LongReadPlans from "@pages/LongReadPlans";
import Waves from "@pages/Waves";
import Auth from "@pages/Auth";
import AdminUsers from "@/adminPages/Users";
import CRM from "@pages/CRM";
import AdminTabs from "@components/Layout/Sidebar/Tabs/AdminTabs";
import UnisenderContactsList from "@/adminPages/UnisenderContactsList";
import UnisenderCreateList from "@/adminPages/UnisenderCreateList";
import EventTabs from "@components/Layout/Sidebar/Tabs/EventTabs";
import EventPromotions from "@pages/EventPromotions";
import Medtouch from "@pages/Medtouch/Medtouch";
import Parsers from "@/adminPages/Parsers"

const adminRoutes = [
    {
        path: '/admin',
        Component: <AdminUsers/>
    },
    {
        path: "/admin/unisender",
        Component: <UnisenderContactsList />
    },
    {
        path: "/admin/unisender/create-list",
        Component: <UnisenderCreateList />
    },
    {
        path: "/admin/parsers",
        Component: <Parsers />
    },
    {
        path: "/admin/parsers/prodoctorov",
        Component: <Parsers />
    },
    {
        path: "/admin/*",
        Component: <NotFound/>
    }
]

const authRoutes = [
    {
        path: '/',
        Component: <Home/>
    },
    {
        path: '/medtouch',
        Component: <Medtouch/>
    },
    {
        path: '/long-read',
        Component: <LongRead/>
    },
    {
        path: '/events',
        Component: <Events/>
    },
    {
        path: '/events-promotions',
        Component: <EventPromotions />
    },
    {
        path: '/waves',
        Component: <Waves/>
    },
    {
        path: '/waves/visit-plans',
        Component: <VisitPlan baseUri="/visits"/>
    },
    {
        path: '/visits/:page',
        Component: <VisitPlan baseUri="/visits"/>
    },
    {
        path: '/waves/event-plans',
        Component: <EventPlans/>
    },
    {
        path: '/waves/long-read-plans',
        Component: <LongReadPlans/>
    },
    {
        path: '/crm',
        Component: <CRM/>
    }
]

const publicRoutes = [
    {
        path: '/auth',
        Component: <Auth/>
    },
    {
        path: '*',
        Component: <NotFound/>
    }
]


const sidebarRoutes = [
    {path: '/long-read', Component: <LongReadTab/>},
    {path: "/waves", Component: <WavesTabs/>},
    {path: "/waves/visit-plans", Component: <WavesTabs/>},
    {path: "/waves/event-plans", Component: <WavesTabs/>},
    {path: "/waves/long-read-plans", Component: <WavesTabs/>},
    {path: "/events", Component: <EventTabs/>},
    {path: "/events-promotions", Component: <EventTabs/>},
    {path: "/admin/*", Component: <AdminTabs />},
    {path: '*', Component: <NotFoundTab/>}
]


export {
    adminRoutes,
    publicRoutes,
    authRoutes,
    sidebarRoutes
}
