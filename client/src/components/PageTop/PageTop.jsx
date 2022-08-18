import React from "react";

import './style.css'

import Filter from "./Filter";
import ExportPage from "./ExportPage";

const PageTop = (props) => {
    const {filter, filtersList, filterChange} = props

    return (
        <div className="page-top">
            <Filter filter={filter} filtersList={filtersList} change={filterChange}/>
            <ExportPage />
        </div>
    )
}

export default PageTop
