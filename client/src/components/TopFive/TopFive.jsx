import './style.css'

import DashboardBlock from "../DashboardBlock";

const TopFive = (props) => {
    const {valueType, title, icon, values, total} = props

    return (
        <DashboardBlock title={title} icon={icon} className="top-five-block">
            {
                typeof values !== 'object' ? '' :
                    <ul className='top-five'>
                        {values.map(({id, title, value}, index) => (
                                <li key={id} className="top-five__item">
                                    <span className="top-five__item-index">{index+1}.</span>
                                    <span className="top-five__item-title">{title}</span>
                                    <span className="top-five__item-value">{valueType === 'percent' ? (value / total * 100).toFixed() + '%' : value}</span>
                                </li>
                            ))}
                    </ul>
            }
        </DashboardBlock>
    )
}

export default TopFive
