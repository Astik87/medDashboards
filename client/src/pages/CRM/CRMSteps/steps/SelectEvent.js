import {useContext} from "react";
import {observer} from "mobx-react";
import {Backdrop, Button, CircularProgress} from "@mui/material";

import Select from "react-select";
import {Context} from "@/index";
import {CRMContext} from "@pages/CRM/CRMContext";
import CRMState from "@/state/CRMState";

const SelectEvent = observer(() => {

    const {filter} = useContext(Context)
    const {event} = CRMState
    const {currentStep, setCurrentStep} = useContext(CRMContext)
    const {eventsList} = filter

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
                    <Select
                        placeholder="Мероприятие"
                        onChange={CRMState.setEvent}
                        value={event}
                        options={eventsList}/>
                </div>
            }
            <Button className="next-btn" onClick={() => {setCurrentStep(currentStep+1)}} disabled={!Boolean(event)}>Next</Button>
        </div>
    )
})

export default SelectEvent
