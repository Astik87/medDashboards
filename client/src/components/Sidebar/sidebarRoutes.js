import LongReadTab from "./LongReadTab";
import NotFoundTab from "./NotFoundTab";

const sidebarRoutes = [
    {path: '/long-read', Component: <LongReadTab/>},
    {path: '*', Component: <NotFoundTab/>}
]


export default sidebarRoutes
