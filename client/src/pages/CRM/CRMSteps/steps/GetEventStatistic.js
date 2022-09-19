import {useContext, useEffect, useState} from "react";
import {Alert, CircularProgress, Stack} from "@mui/material";

import {CRMContext} from "@pages/CRM/CRMContext";
import EventsApi from "@api/EventsApi";
import CRMState from "@/state/CRMState";

const steps = [
    'Собираем статистику мероприятия',
    'Готово'
]

const deliveredStstuses = ['ok_delivered', 'ok_read', 'ok_link_visited']
const readStatuses = ['ok_read', 'ok_link_visited']
const linkVisitedStatuses = ['ok_link_visited']

const GetEventStatistic = () => {

    const [step, setStep] = useState({index: 0, status: 'info'})
    const [eventVisits, setEventVisits] = useState(false)

    const {event, error, setError, unisenderStatistic} = useContext(CRMContext)

    const nextStep = () => {
        const nextStep = step.index + 1
        if (steps[nextStep])
            setStep({index: nextStep, status: "info"})
        else
            setStep({index: step.index, status: "success"})
    }

    const getEventVisits = async () => {
        const response = await EventsApi.getEventVisits(event.value)

        if(!response.success) {
            setError(response.message)
            return  setStep({...step, status: 'error'})
        }

        setEventVisits(response.data)
        nextStep()
    }

    const getResultStatistic = async () => {
        const chartData = [
            {label: 'Отправлено', value: 0},
            {label: 'OR', value: 0},
            {label: 'CTR', value: 0},
            {label: 'Регистрация', value: 0},
            {label: 'Присутствие', value: 0},
        ]

        unisenderStatistic.forEach(message => {
            if(linkVisitedStatuses.indexOf(message.send_result) !== -1) {
                chartData[0].value++
                chartData[1].value++
                chartData[2].value++
            } else if(readStatuses.indexOf(message.send_result) !== -1) {
                chartData[0].value++
                chartData[1].value++
            } else if(deliveredStstuses.indexOf(message.send_result) !== -1)
                chartData[0].value++

            if(eventVisits[message.email]) {
                chartData[3].value++

                if(eventVisits[message.email] > 0)
                    chartData[4].value++
            }
        })

        nextStep()
        setTimeout(() => {
            CRMState.setChartData(chartData)
            CRMState.setMessagesCount(unisenderStatistic.length)
        }, 500)
    }

    useEffect(() => {
        if(!eventVisits)
            setTimeout(() => {
                getEventVisits()
            }, 500)
    }, [])

    useEffect(() => {
        if(eventVisits)
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