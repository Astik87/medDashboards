import React, {useEffect, useReducer, useState} from "react"
import {Line} from "react-chartjs-2"
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";

import './style.css'

import smiley from './img/smiley.svg'
import userIcon from './img/user.svg'
import nurse from '../img/nurse.svg'
import city from '../img/city.svg'
import human from './img/human.svg'

import TopFive from "../../components/TopFive";
import PageTop from "../../components/PageTop";
import Loading from "../../components/Loading";
import DashboardBlock from "../../components/DashboardBlock";
import UserApi from "../../api/UserApi";
import EventsApi from "../../api/EventsApi";

const getApiFilter = (filter) => {
    const apiFilter = {}

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

    if(filter.directionId)
        apiFilter.directionId = filter.directionId

    return apiFilter
}

/**
 * Инициализация графика
 * @param data
 * @returns {{chartOptions: {}, chartData: {}}} Объект с опциями и данными для компонентка <Bar />
 */
const getChartProps = (data) => {
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
                position: 'right',
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

    if(data && data.length) {
        props.chartData.labels = data.map(({label}) => label)
        props.chartData.datasets[0].data = data.map(({value}) => value)
    }

    return props
}

const Medtouch = () => {
    const now = new Date()

    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [usersDara, setUsersData] = useState(false)
    const [eventsDataLoading, setEventsDataLoading] = useState(true)
    const [eventsData, setEventsData] = useState(false)

    const filterReducer = (state, newFilter) => {

        if(JSON.stringify(state) === JSON.stringify(newFilter))
            return state

        setIsLoading(true)
        UserApi.getStatistic(getApiFilter(newFilter)).then((res) => {
            if(res.success === false)
                return setError(res.message)

            setUsersData(res.data)
            setIsLoading(false)
        })

        setEventsDataLoading(true)
        EventsApi.getStatistic(getApiFilter(newFilter)).then((response) => {
            if(!response.success)
                setError(response.message)

            setEventsData(response.data)
            setEventsDataLoading(false)
        })

        return newFilter
    }
    const [filter, filterDispatch] = useReducer(filterReducer, {year: now.getFullYear(), month: false, day: false, eventId: false, directionId: false})

    useEffect(() => {
        if(usersDara === false)
            UserApi.getStatistic(getApiFilter(filter)).then((res) => {
                if(res.success === false)
                    return setError(res.message)

                setUsersData(res.data)
                setIsLoading(false)
            })

        if(eventsData === false)
            EventsApi.getStatistic(getApiFilter(filter)).then((response) => {
                if(!response.success)
                    setError(response.message)

                setEventsData(response.data)
                setEventsDataLoading(false)
            })

    }, [usersDara, filter])

    if(error) {
        return <div className="error">{error}</div>
    }

    if(usersDara === false && isLoading) {
        return <Loading/>
    }

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    )

    const usersChart = getChartProps(usersDara.registeredByDates)
    const eventsChart = getChartProps(eventsData.uniqueViewers)

    return (
        <div className="page medtouch-page">
            <PageTop filter={filter} filtersList={['date', 'directions']} filterChange={filterDispatch}/>

            <div className="medtouch-page__content">
                <div className="medtouch-page__left">
                    <DashboardBlock title="Зарегистрировано" icon={smiley} className="registered-total-block">
                        <div className="registered-total">
                            <div className="registered-total__icon">
                                <img src={userIcon} alt=""/>
                            </div>
                            <div className="registered-total__value">
                                <span>
                                    {isLoading ? <Loading/> : usersDara.total}
                                </span>
                                <div className="registered-total__value-text">
                                    Пользователей
                                </div>
                            </div>
                        </div>
                    </DashboardBlock>
                    <TopFive
                        isLoading={isLoading}
                        title="Специальности"
                        icon={nurse}
                        values={usersDara.directions.map(({name, count}) => ({id: name+count, title: name, value: count}))}
                    />
                    <TopFive
                        isLoading={isLoading}
                        title="Города"
                        icon={city}
                        valueType="percent"
                        total={usersDara.total}
                        values={usersDara.cities.map(({name, count}) => ({id: name+count, title: name, value: count}))}
                    />
                </div>

                <div className="medtouch-page__right">
                    <DashboardBlock title="Кол-во зарегистрированных пользователей" icon={smiley} className="medtouch-page__registrations-chart">
                        {
                            isLoading ? <Loading/> : <Line options={usersChart.chartOptions} data={usersChart.chartData}/>
                        }
                    </DashboardBlock>

                    <DashboardBlock title="Кол-во уникальных участников мероприятия в динамике" icon={human} className="medtouch-page__events-chart">
                        {
                            eventsDataLoading ? <Loading/> : <Line options={eventsChart.chartOptions} data={eventsChart.chartData}/>
                        }
                    </DashboardBlock>
                </div>
            </div>
        </div>
    )
}

export default Medtouch
