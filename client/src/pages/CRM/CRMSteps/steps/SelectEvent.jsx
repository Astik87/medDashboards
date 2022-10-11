import {useContext, useState} from "react";
import {observer} from "mobx-react";
import {Backdrop, Button, CircularProgress} from "@mui/material";

import Select from "react-select";
import {Context} from "@/index";
import {CRMContext} from "@pages/CRM/CRMContext";
import CRMState from "@/state/CRMState";
import DateFilter from "@components/Layout/PageTop/Filter/DateFilter";
import {getDateForFilter} from "@utils/DateUtils";

const SelectEvent = observer(() => {

    const {filter} = useContext(Context)
    const {event} = CRMState
    const {currentStep, setCurrentStep} = useContext(CRMContext)
    const {eventsList} = filter

    const [dateFilter, setDateFilter] = useState({year: 2020, math: false, day: false})

    const getEventOptions = () => {
        let {dateFrom, dateTo} = getDateForFilter(dateFilter)
        dateTo = new Date(dateTo)
        dateFrom = new Date(dateFrom)
        return eventsList.filter(event => {
            const start = new Date(event.start)
            return start > dateFrom && start < dateTo
        })
    }

    return (
        <div className='step select-event'>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={!Boolean(eventsList)}>
                <CircularProgress color="inherit"/>
            </Backdrop>

            {
                Boolean(eventsList)
                &&
                <div className="events-selector">
                    <DateFilter filter={dateFilter} change={setDateFilter} />
                    <Select
                        className="events-select"
                        placeholder="Мероприятие"
                        onChange={CRMState.setEvent}
                        value={event}
                        options={getEventOptions()}/>
                </div>
            }
            <Button className="next-btn" onClick={() => {setCurrentStep(currentStep+1)}} disabled={!Boolean(event)}>Next</Button>
        </div>
    )
})

export default SelectEvent
