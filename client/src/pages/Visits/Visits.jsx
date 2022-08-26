import React from "react";

import BaseWithFilter from "../BaseWithFilter";

class Visits extends BaseWithFilter {

    getFiltersList = () => {
        return ['date']
    }

    content = () => {
        return 'Visits'
    }
}

export default Visits
