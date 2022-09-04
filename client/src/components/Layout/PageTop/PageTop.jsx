import React from "react";

import './style.css'

import Filter from "./Filter";
import ExportPage from "./ExportPage";

const PageTop = (props) => {
    const {filter, filtersList, filterChange, customBtn} = props

    return (
        <div className="page-top">
            <Filter filter={filter} filtersList={filtersList} change={filterChange}/>
            <div className="page-top__right">
                {customBtn}
                <ExportPage />
            </div>
        </div>
    )
}

export default PageTop
