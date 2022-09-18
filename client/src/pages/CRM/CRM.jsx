import {useState} from "react";
import {observer} from "mobx-react";

import CRMState from "@/state/CRMState";
import CRMSteps from "@pages/CRM/CRMSteps";
import CRMResult from "@pages/CRM/CRMResult";
import {CRMContext} from "@pages/CRM/CRMContext";

const CRM = observer(() => {

    const [currentStep, setCurrentStep] = useState(0)
    const [currentCampaign, setCurrentCampaign] = useState(false)
    const [event, setEvent] = useState(false)
    const [unisenderStatistic, setUnisenderStatistic] = useState(false)
    const [error, setError] = useState(false)

    return (
        <div className="page">
            <div className="page_content">
                <CRMContext.Provider
                    value={{
                        currentStep,
                        setCurrentStep,
                        unisenderStatistic,
                        setUnisenderStatistic,
                        event,
                        setEvent,
                        currentCampaign,
                        setCurrentCampaign,
                        error,
                        setError
                    }}>
                    {
                        !CRMState.chartData
                        ? <CRMSteps/>
                        : <CRMResult chartData={CRMState.chartData} />
                    }
                </CRMContext.Provider>
            </div>
        </div>
    )
})

export default CRM