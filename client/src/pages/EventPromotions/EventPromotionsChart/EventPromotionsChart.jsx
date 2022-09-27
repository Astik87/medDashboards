import React from "react";
import ChartDetail from "@pages/EventPromotions/ChartDetail";

import './style.css'

import {DashboardBlock, Empty} from "@components/General";
import {PieChart} from "@components/Charts";

const getChartProps = (data, colors) => {
    const labels = data.map(({name}) => name)

    return {
        labels,
        datasets: [
            {
                data: data.map(({count}) => count),
                backgroundColor: colors,
                borderWidth: 0
            }
        ]
    }
}

const ChartContent = (props) => {
    const {data, total, colors} = props

    return (
        <>
            <PieChart {...getChartProps(data, colors)} className="promotion-statistic__chart"/>
            <div className="promotion-statistic__chart-details">
                {
                    data.map(
                        ({name, count}, index) =>
                            <ChartDetail
                                key={index}
                                name={name}
                                value={count}
                                total={total}
                                color={colors[index]}/>)
                }
            </div>
        </>
    )
}

const EventPromotionsChart = (props) => {

    const {title, data} = props

    let chartBlockClassName = 'promotion-statistic__block promotion-statistic__chart-wrap'

    if(!data.length)
        chartBlockClassName += ' promotion-statistic__chart-empty'

    return (
        <DashboardBlock
            className={chartBlockClassName}
            title={title}
            hideRightContent>
            {
                data && data.length
                    ? <ChartContent {...props} />
                    : <Empty/>
            }
        </DashboardBlock>
    )
}

export default EventPromotionsChart