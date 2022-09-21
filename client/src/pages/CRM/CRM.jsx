import {useState} from "react";
import {observer} from "mobx-react";

import CRMState from "@/state/CRMState";
import CRMSteps from "@pages/CRM/CRMSteps";
import CRMResult from "@pages/CRM/CRMResult";
import {CRMContext} from "@pages/CRM/CRMContext";

const CRM = observer(() => {

    const {usersList, funnelAttraction, bounceFunnel, messagesCount, event, campaign} = CRMState

    const [currentStep, setCurrentStep] = useState(0)
    const [unisenderStatistic, setUnisenderStatistic] = useState(false)
    const [error, setError] = useState(false)

    const restart = () => {
        CRMState.setCampaign(false)
        CRMState.setEvent(false)
        CRMState.setMessagesCount(false)
        CRMState.setFunnelAttraction(false)
        CRMState.setBounceFunnel(false)
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
                        !funnelAttraction || !bounceFunnel
                        ? <CRMSteps/>
                        : <CRMResult usersList={usersList} funnelAttraction={funnelAttraction} bounceFunnel={bounceFunnel} messagesCount={messagesCount} event={event} campaign={campaign} />
                    }
                </CRMContext.Provider>
            </div>
        </div>
    )
})

export default CRM
