import {observer} from "mobx-react";

import './style.css'
import nurse from "@images/nurse.svg"
import BarChart from "@components/Charts/BarChart";
import DashboardBlock from "@components/General/DashboardBlock";
import CRMState from "@/state/CRMState";

const CRMResult = observer((props) => {

    const {chartData} = props
    const {messagesCount} = CRMState
    console.log(messagesCount)

    return (
        <div className="page">
            <DashboardBlock className="crm-chart" title="Воронка привлечения врачей" icon={nurse}>
                <BarChart data={chartData.map(({label, value}) => ({label, value: (value / messagesCount * 100).toFixed(2)}))} />
            </DashboardBlock>
        </div>
    )
})

export default CRMResult