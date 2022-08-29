import React from "react";
import {useLocation, useParams} from "react-router-dom";

const withRouter = (Child) => {
    return (props) => {
        const routeParams = useParams()
        const location = useLocation()

        return <Child {...props} routeParams={routeParams}  />
    }
}

export {
    withRouter
}
