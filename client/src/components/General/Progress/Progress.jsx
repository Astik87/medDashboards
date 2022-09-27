import React from "react";
import './style.css'

import eye from "@images/eye.svg";

const Progress = (props) => {
    const {value, title} = props

    return (
        <div className="progress-wrap">
            <div className="progress__top">
                <div className="progress__icon">
                    <img src={eye} alt="eye"/>
                </div>
                <div className="progress__title">
                    {title}
                    <span>Зрителей</span>
                </div>
            </div>
            <div className="progress">
                <span style={{width: `${value}%`}}></span>
            </div>
            <div className="progress__value">
                {value}%
            </div>
        </div>
    )
}

export default Progress