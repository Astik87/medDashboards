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
        const chartDataIndexes = {}

        const chartData = [{
            label: 'Не указан',
            data: [0, 0, 0, 0, 0],
            borderRadius: 10,
            backgroundColor: 'rgba(51, 97, 255, 0.5)'
        }]

        const failuresData = [
            {
                label: 'Не указан',
                data: [0, 0, 0, 0, 0],
                borderRadius: 10,
                backgroundColor: 'rgba(51, 97, 255, 0.5)'
            }
        ]

        const indexChartData = (message, chartDataIndex) => {
            if (linkVisitedStatuses.indexOf(message.send_result) !== -1) {
                chartData[chartDataIndex].data[0]++
                chartData[chartDataIndex].data[1]++
                chartData[chartDataIndex].data[2]++
            } else if (readStatuses.indexOf(message.send_result) !== -1) {
                chartData[chartDataIndex].data[0]++
                chartData[chartDataIndex].data[1]++
            } else if (deliveredStstuses.indexOf(message.send_result) !== -1)
                chartData[chartDataIndex].data[0]++

            if(deliveredStstuses.indexOf(message.send_result) === -1) {
                failuresData[chartDataIndex].data[0]++
                failuresData[chartDataIndex].data[1]++
                failuresData[chartDataIndex].data[2]++
            } else if(readStatuses.indexOf(message.send_result) === -1) {
                failuresData[chartDataIndex].data[1]++
                failuresData[chartDataIndex].data[2]++
            } else if(linkVisitedStatuses.indexOf(message.send_result) === -1) {
                failuresData[chartDataIndex].data[2]++
            }
        }

        unisenderStatistic.forEach(message => {
            let utm = false
            let chartDataIndex = 0

            if (eventVisits[message.email]) {
                utm = eventVisits[message.email].utm

                if (utm) {
                    if(typeof chartDataIndexes[utm] === 'undefined') {
                        chartDataIndexes[utm] = chartData.push({
                            label: utm,
                            data: [0, 0, 0, 0, 0],
                            borderRadius: 10,
                            backgroundColor: `rgba(51, 97, 255, ${0.5+(chartData.length)/10})`
                        }) - 1
                        failuresData.push({
                            label: utm,
                            data: [0, 0, 0, 0, 0],
                            borderRadius: 10,
                            backgroundColor: `rgba(51, 97, 255, ${0.5+(chartData.length)/10})`
                        })
                    }

                    chartDataIndex = chartDataIndexes[utm]
                }

                chartData[chartDataIndex].data[3]++

                if (eventVisits[message.email].viewingTime > 0)
                    chartData[chartDataIndex].data[4]++
                else
                    failuresData[chartDataIndex].data[4]++
            } else {
                failuresData[0].data[3]++
            }

            indexChartData(message, chartDataIndex)
        })

        console.log(failuresData)

        nextStep()
        setTimeout(() => {
            CRMState.setChartData(chartData)
            CRMState.setFailuresData(failuresData)
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
