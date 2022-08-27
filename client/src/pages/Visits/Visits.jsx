import React from "react";

import BaseWithFilter from "../BaseWithFilter";
import Loading from "../../components/Loading";

class Visits extends BaseWithFilter {

    constructor(props) {
        super(props);

        this.state = {pageNum: 1, limit: 10, plans: false, isLoading: true, ...this.state}
    }

    getFiltersList = () => {
        return ['date']
    }

    content = () => {

        const {isLoading} = this.state

        if(isLoading)
            return <Loading/>

        return (
            <div>

            </div>
        )
    }
}

export default Visits
