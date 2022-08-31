import React, {useContext, useState} from "react";
import Select from "react-select";
import {observer} from "mobx-react";

import './style.css'

import {Context} from "@/index";
import Modal from "@components/Modal";
import Button from "@components/Button";
import EventsList from "./EventsList";

const EventsSelector = observer((props) => {

    const {change} = props
    const {eventsList} = useContext(Context).filter

    const [closed, setClosed] = useState(true)
    const [events, setEvents] = useState([])

    const getEventOptions = () => eventsList.map(({id, name}) => {return {value: id, label: name}})

    const onSelectChange = (newValues) => {
        if(newValues.length > 10)
            return false

        const newEventIds = newValues.map(({value}) => value)
        setEvents(newValues)

        if(typeof change === 'function')
            change(newEventIds)
    }

    const deleteEvent = (eventId) => {
        onSelectChange(events.filter(({value}) => value !== eventId))
    }

    return (
        <div className="events-selector">
            <Button className="events-selector__btn" onClick={() => setClosed(false)}>Мероприятия</Button>
            {
                !closed
                &&
                <Modal close={() => setClosed(true)}>
                    <div className="events-selector__content">
                        <Select
                            isMulti
                            closeMenuOnSelect={false}
                            value={events}
                            controlShouldRenderValue={false}
                            className="events-select"
                            classNamePrefix="events-select"
                            placeholder="Мероприятие"
                            options={getEventOptions()}
                            onChange={onSelectChange}
                        />

                        <div className="events-selector__events-list">
                            <EventsList deleteEvent={deleteEvent} events={events}/>
                        </div>
                    </div>
                </Modal>
            }
        </div>
    )
})

export default EventsSelector
