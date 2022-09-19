import {useContext} from "react";
import {Alert, Button, Step, StepLabel, Stepper} from "@mui/material";

import './style.css'

import SelectCampaign from "@pages/CRM/CRMSteps/steps/SelectCampaign";
import SelectEvent from "@pages/CRM/CRMSteps/steps/SelectEvent"
import GetUnisenderStatistic from "@pages/CRM/CRMSteps/steps/GetUnisenderStatistic"
import GetEventStatistic from "@pages/CRM/CRMSteps/steps/GetEventStatistic";
import {CRMContext} from "@pages/CRM/CRMContext";

const steps = [
    {label: 'Выбор рассылки', Component: <SelectCampaign/>},
    {label: 'Выбор мероприятия', Component: <SelectEvent/>},
    {label: 'Сбор статистики из Unisender', Component: <GetUnisenderStatistic/>},
    {label: 'Сбор статистики мероприятия', Component: <GetEventStatistic/>}
]

const CRMSteps = () => {

    const {restart, error, currentStep} = useContext(CRMContext)

    return (
        <>
            <Stepper activeStep={currentStep}>
                {
                    steps.map(({label}, index) => (
                        <Step key={label}>
                            <StepLabel error={error && currentStep === index}>{label}</StepLabel>
                        </Step>
                    ))
                }
            </Stepper>
            <div className="crm-step__content">
                {
                    error
                        ?
                        <>
                            <Alert severity="error">{error}</Alert>
                            <Button onClick={restart}>Повторить попытку</Button>
                        </>
                        :
                        steps[currentStep].Component
                }
            </div>
        </>
    )
}

export default CRMSteps
