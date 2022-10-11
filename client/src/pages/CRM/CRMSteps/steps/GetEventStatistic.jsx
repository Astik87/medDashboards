import {useContext, useEffect, useState} from "react";
import {Alert, CircularProgress, Stack} from "@mui/material";

import {CRMContext} from "@pages/CRM/CRMContext";
import EventsApi from "@api/EventsApi";
import CRMState from "@/state/CRMState";

const steps = [
    'Собираем статистику мероприятия',
    'Готово'
]

const deliveredStatuses = ['ok_delivered', 'ok_read', 'ok_link_visited']
const readStatuses = ['ok_read', 'ok_link_visited']
const linkVisitedStatuses = ['ok_link_visited']

const getUsersList = (unisenderStatistic, eventVisits) => {

    const usersList = []

    unisenderStatistic.forEach((message, index) => {
        if (!message.email)
            return

        const user = {
            id: index,
            email: message.email,
            utmSource: '',
            lastUpdate: message.last_update,
            isDelivered: false,
            isRead: false,
            isVisitedLink: false,
            isRegistered: false,
            isViewing: false
        }

        user.isDelivered = deliveredStatuses.indexOf(message.send_result) !== -1
        user.isRead = readStatuses.indexOf(message.send_result) !== -1
        user.isVisitedLink = linkVisitedStatuses.indexOf(message.send_result) !== -1

        user.isRegistered = typeof eventVisits[user.email] !== 'undefined'
        user.isViewing = eventVisits[user.email] ? eventVisits[user.email].viewingTime > 0 : false

        user.utmSource = eventVisits[user.email] ? eventVisits[user.email].utm : ''

        usersList.push(user)
    })

    return usersList
}

const getChartDatasets = (usersList) => {

    const chartDataIndexes = {}

    const funnelAttraction = [{
        label: 'Не указан',
        data: [0, 0, 0, 0, 0],
        borderRadius: 10,
        backgroundColor: 'rgba(51, 97, 255, 0.5)'
    }]

    const bounceFunnel = [
        {
            label: 'Не указан',
            data: [0, 0, 0, 0, 0],
            borderRadius: 10,
            backgroundColor: 'rgba(255, 149, 0, 0.5)'
        }
    ]

    usersList.forEach(user => {
        let chartDataIndex = user.utmSource ? chartDataIndexes[user.utmSource] : 0
        if (typeof chartDataIndex === 'undefined') {
            chartDataIndexes[user.utmSource] = funnelAttraction.push({
                label: user.utmSource,
                data: [0, 0, 0, 0, 0],
                borderRadius: 10,
                backgroundColor: `rgba(51, 97, 255, 0.${5+funnelAttraction.length})`
            }) - 1

            chartDataIndex = bounceFunnel.push({
                label: user.utmSource,
                data: [0, 0, 0, 0, 0],
                borderRadius: 10,
                backgroundColor: `rgba(255, 149, 0, 0.${5+funnelAttraction.length})`
            }) - 1
        }

        funnelAttraction[chartDataIndex].data[0] += Number(user.isDelivered)
        funnelAttraction[chartDataIndex].data[1] += Number(user.isRead)
        funnelAttraction[chartDataIndex].data[2] += Number(user.isVisitedLink)
        funnelAttraction[chartDataIndex].data[3] += Number(user.isRegistered)
        funnelAttraction[chartDataIndex].data[4] += Number(user.isViewing)

        bounceFunnel[chartDataIndex].data[0] += Number(!user.isDelivered)
        bounceFunnel[chartDataIndex].data[1] += Number(!user.isRead)
        bounceFunnel[chartDataIndex].data[2] += Number(!user.isVisitedLink)
        bounceFunnel[chartDataIndex].data[3] += Number(!user.isRegistered)
        bounceFunnel[chartDataIndex].data[4] += Number(!user.isViewing)
    })

    return {funnelAttraction, bounceFunnel}
}

const GetEventStatistic = () => {

    const [step, setStep] = useState({index: 0, status: 'info'})
    const [eventVisits, setEventVisits] = useState(false)

    const {event} = CRMState

    const {error, setError, unisenderStatistic} = useContext(CRMContext)

    const nextStep = () => {
        const nextStep = step.index + 1
        if (steps[nextStep])
            setStep({index: nextStep, status: "info"})
        else
            setStep({index: step.index, status: "success"})
    }

    const getEventVisits = async () => {
        const response = await EventsApi.getEventVisits(event.value)

        if (!response.success) {
            setError(response.message)
            return setStep({...step, status: 'error'})
        }

        setEventVisits(response.data)
        nextStep()
    }

    const getResultStatistic = async () => {
        const usersList = getUsersList(unisenderStatistic, eventVisits)

        const {funnelAttraction, bounceFunnel} = getChartDatasets(usersList)

        nextStep()
        setTimeout(() => {
            CRMState.setFunnelAttraction(funnelAttraction)
            CRMState.setBounceFunnel(bounceFunnel)
            CRMState.setUsersList(usersList)
            CRMState.setMessagesCount(unisenderStatistic.length)
        }, 500)
    }

    useEffect(() => {
        if (!eventVisits)
            setTimeout(() => {
                getEventVisits()
            }, 500)
    }, [])

    useEffect(() => {
        if (eventVisits)
            setTimeout(() => {
                getResultStatistic()
            }, 500)
    }, [eventVisits])

    return (
        <div className="step get-event-statistic">
            <CircularProgress className="get-unisender-statistic__progress"/>
            <Stack spacing={2}>
                {
                    steps.map((text, index) => {
                        let type = 'info'
                        if (index < step.index)
                            type = 'success'

                        if (index === step.index)
                            type = step.status

                        return (
                            <Alert key={text} severity={type}>
                                {text}
                                <br/>
                                {index === step.index && error ? error : ''}
                            </Alert>
                        )
                    })
                }
            </Stack>
        </div>
    )
}

export default GetEventStatistic
