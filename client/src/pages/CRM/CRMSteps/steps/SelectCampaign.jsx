import {useContext, useEffect, useState} from "react";
import {
    Alert,
    Backdrop, Button,
    CircularProgress
} from "@mui/material";
import Select from "react-select";

import UnisenderApi from "@api/UnisenderApi";
import {CRMContext} from "@pages/CRM/CRMContext";
import CRMState from "@/state/CRMState";

const dateTo = new Date()
const dateFrom = new Date()
dateFrom.setFullYear(dateTo.setFullYear() - 2)

const SelectCampaign = () => {

    const [campaigns, setCampaigns] = useState(false)
    const [loading, setLoading] = useState(true)

    const {error, setError, currentStep, setCurrentStep} = useContext(CRMContext)

    const {campaign} = CRMState

    const getCompaigns = async () => {
        setLoading(true)
        const response = await UnisenderApi.getCampaigns(dateFrom, dateTo)

        if(!response.success)
            setError(response.message)
        else
            setCampaigns(response.data.result)

        setLoading(false)
    }

    const selectCampaign = (value) => {
        CRMState.setCampaign(value)
    }

    useEffect(() => {
        getCompaigns()
    }, [])

    if(error)
        return (
            <Alert severity="error">{error}</Alert>
        )

    return (
        <div className="step selector-campaign">
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            {
                campaigns
                &&
                    <div className="campaigns-selector">
                        <Select
                            onChange={selectCampaign}
                            value={campaign}
                            placeholder="Рассылка"
                            options={campaigns.map(({subject, id}) => {
                                return {label: subject, value: id}
                            })}/>
                    </div>
            }
            <Button className="next-btn" onClick={() => {setCurrentStep(currentStep+1)}} disabled={!Boolean(campaign)}>Next</Button>
        </div>
    )
}

export default SelectCampaign
