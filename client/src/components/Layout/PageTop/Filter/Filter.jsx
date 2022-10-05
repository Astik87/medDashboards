import React from "react"
import Select from 'react-select'

import './style.css'

import DateFilter from "./DateFilter";
import {useContext} from "react";
import {Context} from "@/index";
import {observer} from "mobx-react";
import {getDateForFilter} from "@utils/DateUtils";

const Filter = observer((props) => {
    const {filtersList, filterProps, filter} = props
    let {change} = props

    if (typeof change !== 'function')
        change = () => {
        }

    const {directionsList, eventsList, userGroups} = useContext(Context).filter

    if (!filtersList || !filtersList.length)
        return 'Not elements'

    const setEvent = (newValue) => {
        if (Array.isArray(newValue))
            return change({...filter, eventId: !newValue ? false : newValue.map(({value}) => value)})

        change({...filter, eventId: !newValue ? false : newValue.value})
    }

    const setDirection = (option) =>
        change({...filter, directionId: !option ? false : option.value})

    const setUserGroup = (newValue) => {
        if (Array.isArray(newValue))
            return change({...filter, userGroup: !newValue ? false : newValue.map(({value}) => value)})

        change({...filter, userGroup: !newValue ? false : newValue.value})
    }

    const setLongRead = (option) => {
        change({...filter, longReadType: !option ? false : option.value})
    }

    const getEventOptions = () => {
        let {dateFrom, dateTo} = getDateForFilter(filter)
        dateTo = new Date(dateTo)
        dateFrom = new Date(dateFrom)
        return eventsList.filter(event => {
            const start = new Date(event.start)
            return start > dateFrom && start < dateTo
        })
    }

    const getDirectionOptions = () => directionsList.map(({id, name}) => {
        return {value: id, label: name}
    })

    const getEventProps = () => filterProps && filterProps.events ? filterProps.events : {}

    const getUserGroupProps = () => filterProps && filterProps.userGroup ? filterProps.userGroup : {}

    const getLongReadProps = () => filterProps && filterProps.longRead ? filterProps.longRead : {}

    return (
        <div className="filter">
            {filtersList.map((filterName) => {
                switch (filterName) {
                    case 'date':
                        return <DateFilter key="date" filter={filter} change={(date) => change({...filter, ...date})}/>
                    case 'events':
                        return eventsList &&
                            <Select
                                key="event"
                                placeholder="Мероприятие"
                                onChange={setEvent}
                                options={getEventOptions()}
                                classNamePrefix="filter"
                                className="filter-select"
                                isClearable={true}
                                {...getEventProps()}/>
                    case 'directions':
                        return directionsList &&
                            <Select
                                key="directions"
                                placeholder="Специальность"
                                onChange={setDirection}
                                options={getDirectionOptions()}
                                classNamePrefix="filter"
                                className="filter-select"
                                isClearable={true}
                            />
                    case 'userGroup':
                        return directionsList &&
                            <Select
                                key="userGroup"
                                placeholder="Группы пользователей"
                                onChange={setUserGroup}
                                options={userGroups}
                                classNamePrefix="filter"
                                className="filter-select"
                                isClearable={true}
                                {...getUserGroupProps()}/>
                    case 'longRead':
                        return <Select
                                    key="longReadType"
                                    placeholder="LongRead"
                                    onChange={setLongRead}
                                    classNamePrefix="filter"
                                    className="filter-select"
                                    isClearable={true}
                                    {...getLongReadProps()}/>
                    default:
                        return `Filter ${filterName} is not-defined`
                }
            })}
        </div>
    )
})

export default Filter
