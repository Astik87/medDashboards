import React from "react";
import {Link} from "react-router-dom";

import './style.css'

const PaginationLinks = (props) => {
    const {currentPage, pagesCount, baseUri} = props

    const getPaginationItems = () => {

        const paginationItems = []
        let isCurrent = false,
            className = '',
            key = 1

        for (let pageNum = 1; pageNum <= pagesCount; pageNum++) {
            isCurrent = pageNum === currentPage
            key = pageNum + currentPage.toString()
            className = `pagination-item ${isCurrent ? 'current' : ''}`
            paginationItems.push(<Link key={key} className={className} to={baseUri+'/'+pageNum} >{pageNum}</Link>)
        }

        return paginationItems
    }

    return (
        <div className="pagination-wrapper">
            <ul className="pagination">
                <Link to={baseUri} className="pagination-item">{'<'}</Link>
                {getPaginationItems()}
                <Link to={baseUri+'/'+pagesCount} className="pagination-item">{'>'}</Link>
            </ul>
        </div>
    )
}

export default PaginationLinks
