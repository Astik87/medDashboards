import {useState} from "react";
import {observer} from "mobx-react";

import CRMState from "@/state/CRMState";
import CRMSteps from "@pages/CRM/CRMSteps";
import CRMResult from "@pages/CRM/CRMResult";
import {CRMContext} from "@pages/CRM/CRMContext";

const CRM = observer(() => {

    const {chartData, messagesCount, event, campaign} = CRMState

    const [currentStep, setCurrentStep] = useState(0)
    const [unisenderStatistic, setUnisenderStatistic] = useState(false)
    const [error, setError] = useState(false)

    const restart = () => {
        CRMState.setCampaign(false)
        CRMState.setEvent(false)
        CRMState.setMessagesCount(false)
        CRMState.setChartData(false)
        setCurrentStep(0)
        setUnisenderStatistic(false)
        setError(false)
    }

    return (
        <div className="page">
            <div className="page_content">
                <CRMContext.Provider
                    value={{
                        currentStep,
                        setCurrentStep,
                        unisenderStatistic,
                        setUnisenderStatistic,
                        error,
                        setError,
                        restart
                    }}>
                    {
                        !chartData
                        ? <CRMSteps/>
                        : <CRMResult chartData={CRMState.chartData} failuresData={CRMState.failuresData} messagesCount={messagesCount} event={event} campaign={campaign} />
                    }
                </CRMContext.Provider>
            </div>
        </div>
    )
})

export default CRM
