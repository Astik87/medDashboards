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

    const nextPageUri = currentPage < pagesCount ? baseUri+'/'+(+currentPage+1) : pagesCount
    const prevPageUri = currentPage > 2 ? baseUri+'/'+(+currentPage-1) : baseUri

    return (
        <div className="pagination-wrapper">
            <ul className="pagination">
                <Link to={prevPageUri} className="pagination-item">{'<'}</Link>
                {getPaginationItems()}
                <Link to={nextPageUri} className="pagination-item">{'>'}</Link>
            </ul>
        </div>
    )
}

export default PaginationLinks
