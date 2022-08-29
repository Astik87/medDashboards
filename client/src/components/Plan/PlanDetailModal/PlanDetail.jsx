import React from "react";

import './style.css'

import {formatDate} from "../../../utils/DateUtils";
import Empty from "../../Empty";

const PlanDetailModal = (props) => {

    const {plan, close} = props

    return (
        <div className="plan-wrapper">
            <div className="plan">
                <div className="plan-close" onClick={close}></div>
                {
                    plan.telemarketers.length > 0
                        ?
                        plan.telemarketers.map(({name, conducted, total, doctors}) => (
                            <div key={name} className="plan-telemarketers-list">
                                <div className="plan-telemarketer">
                                    <div className="plan-telemarketer-name">
                                        {name}
                                    </div>
                                    <div className="plan-telemarketer-visits">
                                        <span className="plan-telemarketer-conducted">
                                            {conducted}
                                        </span>
                                        /
                                        <span className="plan-telemarketer-total">
                                            {total}
                                        </span>
                                    </div>
                                </div>
                                <div className="plan__doctors-list">
                                    {
                                        doctors.map(({name, status, time}) => (
                                            <div key={time} className={`plan__doctors-item ${status ? 'conducted' : ''}`}>
                                                <div className="plan__doctors-name">
                                                    {name}
                                                </div>
                                                <div className="plan__doctors-time">
                                                    {formatDate(new Date(time))}
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                        :
                        <Empty/>
                }
            </div>
        </div>
    )
}

export default PlanDetailModal
