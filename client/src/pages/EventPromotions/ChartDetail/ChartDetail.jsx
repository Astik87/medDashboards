import React from "react";

const ChartDetail = (props) => {

    const {color, total, value, name} = props

    const percent = (value / total * 100).toFixed(2)

    return (
        <div className="promotion-statistic__chart-details-item">
            <div
                className="promotion-statistic__chart-details-color"
                style={{
                    backgroundColor: color
                }}>

            </div>
            <div className="promotion-statistic__chart-details-name">
                {name}
            </div>
            <div className="promotion-statistic__chart-details-value">
                {percent}%
                <span>
                    {value}
                </span>
            </div>
        </div>
    )
}

export default ChartDetail