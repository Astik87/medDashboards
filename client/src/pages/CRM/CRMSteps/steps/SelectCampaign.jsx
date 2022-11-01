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
import DateFilter from "@components/Layout/PageTop/Filter/DateFilter";
import {getDateForFilter} from "@utils/DateUtils";

const now = new Date()

const SelectCampaign = () => {

    const [campaigns, setCampaigns] = useState(false)
    const [loading, setLoading] = useState(true)
    const [dateFilter, setDateFilter] = useState({year: now.getFullYear(), month: false, day: false})

    const {error, setError, currentStep, setCurrentStep} = useContext(CRMContext)

    const {campaign} = CRMState

    const getCompaigns = async () => {
        setLoading(true)
        const {dateFrom, dateTo} = getDateForFilter(dateFilter)
        const response = await UnisenderApi.getCampaigns(new Date(dateFrom), new Date(dateTo))

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
    }, [dateFilter])

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
                        <DateFilter filter={dateFilter} change={setDateFilter} />
                        <Select
                            onChange={selectCampaign}
                            value={campaign}
                            placeholder="Рассылка"
                            options={campaigns.map(({subject, id, start_time}) => {
                                return {label: `${start_time}: ${id}. ${subject}`, value: id}
                            })}/>
                    </div>
            }
            <Button className="next-btn" onClick={() => {setCurrentStep(currentStep+1)}} disabled={!Boolean(campaign)}>Next</Button>
        </div>
    )
}

export default SelectCampaign
