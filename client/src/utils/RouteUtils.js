import React from "react";
import {useLocation, useParams} from "react-router";

const withRouter = (Child) => {
    return (props) => {
        const routeParams = useParams()

        return <Child {...props} routeParams={routeParams}  />
    }
}

export {
    withRouter
}
