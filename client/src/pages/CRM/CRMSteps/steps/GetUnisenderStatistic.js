import {useContext, useEffect, useState} from "react";
import {
    CircularProgress,
    Alert,
    Stack
} from '@mui/material'

import UnisenderApi from "@api/UnisenderApi";
import {CRMContext} from "@pages/CRM/CRMContext";
import {CSVToArray} from "@utils/CSVParser";

const steps = [
    'Собираем статистику из Unisender',
    'Ждем ответ от Unisender',
    'Обробатываем ответ'
]

const GetUnisenderStatistic = () => {

    const [step, setStep] = useState({index: 0, status: 'info'})
    const [taskUuid, setTaskUuid] = useState(false)
    const [statisticFileUrl, setStatisticFileUrl] = useState(false)
    const [taskStatusCount, setTaskStatusCount] = useState(0)

    const {currentCampaign, error, setError, setUnisenderStatistic, currentStep, setCurrentStep} = useContext(CRMContext)

    const nextStep = () => {
        const nextStep = step.index + 1
        if (steps[nextStep]) {
            setStep({index: nextStep, status: 'info'})
        } else {
            setStep({...step, status: 'success'})
            setTimeout(() => setCurrentStep(currentStep+1), 500)
        }
    }

    const getCampaignDeliveryStats = () => {
        setTimeout(async () => {
            const response = await UnisenderApi.getCampaignDeliveryStats(currentCampaign.value)

            if (!response.success) {
                setError(response.message)
                return setStep({...step, status: 'error'})
            }

            setTaskUuid(response.data.task_uuid)
            // getTaskStatus()
            nextStep()
        }, 1000)
    }

    const getTaskStatus = async () => {
        setTimeout(async () => {
            const response = await UnisenderApi.getTaskResult(taskUuid)

            if (!response.success) {
                setError(response.message)
                return setStep({...step, status: 'error'})
            }

            if (response.data.status !== 'completed') {
                return setTaskStatusCount(taskStatusCount + 1)
            }

            setStatisticFileUrl(response.data.file_to_download)
            nextStep()
        }, 1000)
    }

    const getStatisticFromFile = async () => {
        const response = await UnisenderApi.getStatisticFromFile(statisticFileUrl)

        if (!response.success) {
            setError(response.message)
            return setStep({...step, status: 'error'})
        }

        const users = await CSVToArray(response.data)

        setUnisenderStatistic(users)
        nextStep()
    }

    useEffect(() => {
        getCampaignDeliveryStats()
    }, [])

    useEffect(() => {
        if (statisticFileUrl)
            return

        if (!taskUuid)
            return

        getTaskStatus()
    }, [taskStatusCount, taskUuid])

    useEffect(() => {
        if (statisticFileUrl)
            getStatisticFromFile()
    }, [statisticFileUrl])

    return (
        <div className="step get-unisender-statistic">
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

export default GetUnisenderStatistic