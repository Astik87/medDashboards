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
        title: 'Пользователи',
        code: 'AdminUsers',
        path: '/admin',
        Component: <AdminUsers/>
    },
    {
        title: "Unisender",
        code: "Unisender",
        path: "/admin/unisender",
        Component: <UnisenderContactsList />
    },
    {
        title: "Unisender Create List",
        code: "UnisenderCreateList",
        path: "/admin/unisender/create-list",
        Component: <UnisenderCreateList />
    },
    {
        title: "Парсеры",
        code: "Parsers",
        path: "/admin/parsers",
        Component: <Parsers />
    },
    {
        title: "Парсер prodoctorov.ru",
        code: "ParserProdoctorov",
        path: "/admin/parsers/prodoctorov",
        Component: <Parsers />
    },
    {
        title: "Страница не найдена",
        path: "/admin/*",
        Component: <NotFound/>
    }
]

const authRoutes = [
    {
        title: "Главная",
        code: "MainPage",
        path: '/',
        Component: <Home/>
    },
    {
        title: 'MedTouch',
        code: 'MedTouch',
        path: '/medtouch',
        Component: <Medtouch/>
    },
    {
        title: 'LongRead',
        code: 'LongRead',
        path: '/long-read',
        Component: <LongRead/>
    },
    {
        title: 'Мероприятия',
        code: 'Events',
        path: '/events',
        Component: <Events/>
    },
    {
        title: 'Мероприятия: База продвижения',
        code: 'EventsPromotions',
        path: '/events-promotions',
        Component: <EventPromotions />
    },
    {
        title: 'Омниканальный проект',
        code: 'Waves',
        path: '/waves',
        Component: <Waves/>
    },
    {
        title: 'Планы визитов',
        code: 'VisitPlans',
        path: '/waves/visit-plans',
        Component: <VisitPlan baseUri="/visits"/>
    },
    {
        title: 'Планы мероприятий',
        code: 'EventPlans',
        path: '/waves/event-plans',
        Component: <EventPlans/>
    },
    {
        title: "Планы LongRead'а",
        code: 'LongReadPlans',
        path: '/waves/long-read-plans',
        Component: <LongReadPlans/>
    },
    {
        title: 'CRM',
        code: "CRM",
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
    sidebarRoutes,
}
