import React, {useReducer, useState} from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2'

import './style.css'
import PageTop from "../../components/PageTop";
import EventsApi from "../../api/EventsApi";
import Loading from "../../components/Loading";
import DashboardBlock from "../../components/DashboardBlock";
import TopFive from "../../components/TopFive";

import eventEye from './img/eye.svg'
import eye from '../img/eye.svg'
import nurse from '../img/nurse.svg'

/**
 * Получить статистику мероприятий по фильтру
 * @param filter
 * @return {Promise<boolean|{success: boolean, message: *, status: *}|{data: *, success: boolean}>}
 */
const getStatistics = async (filter) => {
    const apiFilter = {}

    if(filter.eventId) {
        apiFilter.eventId = filter.eventId
    }

    const month = filter.month < 10 ? '0'+filter.month : filter.month
    const day = filter.day < 10 ? '0'+filter.day : filter.day
    if(filter.month && !filter.day) {
        const maxDay = new Date(filter.year, filter.month, 0).getDate()
        apiFilter.dateFrom = `${filter.year}-${month}-01T00:00:00Z`
        apiFilter.dateTo = `${filter.year}-${month}-${maxDay}T23:59:00Z`
    } else if (filter.day) {
        apiFilter.dateFrom = `${filter.year}-${month}-${day}T00:00:00Z`
        apiFilter.dateTo = `${filter.year}-${month}-${day}T23:59:00Z`
    } else {
        apiFilter.dateFrom = `${filter.year}-01-01T00:00:00Z`
        apiFilter.dateTo = `${filter.year}-12-31T23:59:00Z`
    }

    if(filter.directionId)
        apiFilter.directionId = filter.directionId

    return await EventsApi.getStatistic(apiFilter)
}

/**
 * Инициализация графика
 * @param data
 * @returns {{chartOptions: {}, chartData: {}}} Объект с опциями и данными для компонентка <Bar />
 */
const initBarChart = (data) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    )

    const props = {
        chartOptions: {},
        chartData: {
            labels: [],
            datasets: [
                {
                    yAxisID: 'yAxis',
                    xAxisID: 'xAxis',
                    label: 'Users',
                    backgroundColor: '#3361FF',
                    cubicInterpolationMode: 'monotone',
                    borderColor: '#3361FF',
                    fill: true,
                    data: []
                }
            ]
        }
    }

    props.chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                intersect: false,
                position: 'nearest',
            }
        },
        scales: {
            yAxis: {
                position: 'right'
            },
            xAxis: {
                grid: {
                    display:false
                }
            }
        }
    }

    if(!data)
        return props

    if(data.uniqueViewers && data.uniqueViewers.length) {
        props.chartData.labels = data.uniqueViewers.map(({label}) => label)
        props.chartData.datasets[0].data = data.uniqueViewers.map(({value}) => value)
    }

    return props
}

const Events = () => {
    const now = new Date()

    const [data, setData] = useState(false)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const filterReducer = (state, newFilter) => {

        if(JSON.stringify(state) === JSON.stringify(newFilter))
            return state

        setIsLoading(true)
        getStatistics(newFilter).then((response) => {
            if(!response.success)
                setError(response.message)
            else
                setData(response.data)

            setIsLoading(false)
        })

        return newFilter
    }
    const [filter, filterDispatch] = useReducer(filterReducer, {year: now.getFullYear(), month: false, day: false, eventId: false, directionId: false})

    if(error)
        return <div className="error">{error}</div>

    if(data === false && error === false) {
        getStatistics(filter).then((response) => {
            if(!response.success)
                setError(response.message)
            else
                setData(response.data)

            setIsLoading(false)
        })

        return <Loading />
    }

    const {chartOptions, chartData} = initBarChart(data)


    return (
        <div className="events-page page">
            <PageTop filtersList={['date', 'directions', 'events']} filter={filter} filterChange={filterDispatch} />
            <div className="events-page__content">
                <div className="events-page__left">

                    <DashboardBlock className="events-visits-chart" title="Кол-во уникальных зрителей (1 день)" icon={eventEye}>
                        {
                            isLoading
                                ? <Loading/>
                                : <Line options={chartOptions} data={chartData}/>
                        }
                    </DashboardBlock>

                    <div className="events-page__tops">
                        <TopFive title="Специальности" icon={nurse} isLoading={isLoading} values={isLoading || data.directions.map(({name, count}) => ({id: name+count, title: name, value: count}))} />
                        <TopFive title="Города" valueType="percent" total={data.total} icon={nurse} isLoading={isLoading} values={isLoading || data.cities.map(({name, count}) => ({id: name+count, title: name, value: count}))} />
                    </div>

                </div>
                <div className="events-page__right">
                    <div className="events-page__right-top">
                        <DashboardBlock className="events-page__right-top-item" title="Зрители" icon={eye}>
                            <div className="events-page-value">
                                {isLoading ? <Loading/> : data.total}
                            </div>
                            <div className="events-page-subtitle">
                                Пользователей
                            </div>
                        </DashboardBlock>
                        <DashboardBlock className="events-page__right-top-item" title="Глубина просмотра" icon={eye}>
                            <div className="events-page-value">
                                {isLoading ? <Loading/> : data.viewingDepth}
                            </div>
                            <div className="events-page-subtitle">
                                Минут
                            </div>
                        </DashboardBlock>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events
