import React from "react"

import './style.css'

const DashboardBlock = (props) => {
    const {title, icon, children, className, topContent, hideRightContent} = props

    return (
        <div className={"dashboard-block " + className}>
            <div className="dashboard-block__top">
                <div className="dashboard-block-title"><span>{title}</span> {icon && <img src={icon} alt="icon"/>}</div>
                {
                    !hideRightContent
                    &&
                    <div className="dashboard-block__top-content">{topContent}</div>
                }
            </div>
            <div className="dashboard-block-content">
                {children}
            </div>
        </div>
    )
}

export default DashboardBlock
