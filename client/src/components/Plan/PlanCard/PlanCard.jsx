import React from "react";

import './style.css'

import done from './img/done.svg'
import ongoing from './img/ongoing.svg'
import preparing from './img/preparing.svg'

import {formatDate} from "../../../utils/DateUtils";
import PlanCardBlock from "./PlanCardBlock";

const planColorClasses = {
    Done: 'green',
    Ongoing: 'blue',
    Preparing: 'yellow'
}

const statusIcons = {
    Done: <img src={done} alt=""/>,
    Ongoing: <img src={ongoing} alt=""/>,
    Preparing: <img src={preparing} alt=""/>
}

const PlanCard = (props) => {
    const {data, open} = props

    const now = new Date()

    let status = 'Preparing'
    const start = new Date(data.start)
    const end = new Date(data.end)

    if (end < now)
        status = 'Done'

    if (start < now && end > now)
        status = 'Ongoing'

    const planBlacksList = [
        {title: 'Plan', value: data.plan},
        {title: 'Fact', value: data.fact}
    ]

    if (status !== 'Preparing')
        planBlacksList.push({title: status === 'Done' ? 'Result' : 'Target', value: Math.abs(data.plan - data.fact)})

    return (
        <div className={`plans-list__item ${planColorClasses[status]}`}
             onClick={open}>
            <div className="plans-list__item-left">
                <div className="plans-list__item-name">
                    {data.name}
                </div>
                <div className="plans-list__item-status">
                    {status} {statusIcons[status]}
                </div>
                <div className="plans-list__item-result-percent">
                    {(data.fact / data.plan * 100).toFixed()}%
                </div>

                <div className="plans-list__item-start">
                    {formatDate(start)}
                </div>
            </div>
            <div className="plans-list__item-right">
                {
                    planBlacksList.map(({title, value}, index) => <PlanCardBlock key={data.id + '.' + index} title={title} value={value}/>)
                }
                <div className="plans-list__item-end">
                    {formatDate(end)}
                </div>
            </div>
        </div>
    )
}

export default PlanCard
