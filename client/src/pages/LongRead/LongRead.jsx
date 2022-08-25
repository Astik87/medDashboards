import React, {useEffect, useReducer, useState} from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2'

import './style.css'

import readIcon from './img/read-icon.svg'
import eye from '../img/eye.svg'
import book from './img/book.svg'
import link from './img/link.svg'
import nurse from '../img/nurse.svg'
import city from '../img/city.svg'
import tape from './img/tape.svg'
import note from './img/note.svg'

import LongReadApi from "../../api/LongReadApi";
import DashboardBlock from "../../components/DashboardBlock";
import TopFive from "../../components/TopFive";
import PageTop from "../../components/PageTop";
import Loading from "../../components/Loading";

/**
 * Получить статистику LongRead
 * @param filter
 * @returns {Promise<{data: any, success: boolean}|{success: boolean, message: *}>}
 */
const getStatistic = async (filter) => {
    const apiFilter = {}

    if(filter.eventId) {
        apiFilter.eventId = filter.eventId
    }
    else {
        if(filter.month && !filter.day) {
            const maxDay = new Date(filter.year, filter.month, 0).getDate()
            apiFilter.dateFrom = `${filter.year}-${filter.month}-01T00:00:00Z`
            apiFilter.dateTo = `${filter.year}-${filter.month}-${maxDay}T23:59:00Z`
        } else if (filter.day) {
            apiFilter.dateFrom = `${filter.year}-${filter.month}-${filter.day}T00:00:00Z`
            apiFilter.dateTo = `${filter.year}-${filter.month}-${filter.day}T23:59:00Z`
        } else {
            apiFilter.dateFrom = `${filter.year}-01-01T00:00:00Z`
            apiFilter.dateTo = `${filter.year}-12-31T23:59:00Z`
        }
    }

    if(filter.directionId)
        apiFilter.directionId = filter.directionId

    return  await LongReadApi.getStatistic(apiFilter)
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
        BarElement,
        Title,
        Tooltip,
        Legend)

    const props = {
        chartOptions: {},
        chartData: {
            labels: [],
            datasets: [
                {
                    yAxisID: 'yAxis',
                    xAxisID: 'xAxis',
                    label: 'Users',
                    minBarLength: 5,
                    borderRadius: 10,
                    backgroundColor: ['#3361FF', '#EDEFF2', '#EDEFF2', '#EDEFF2', '#EDEFF2'],
                    data: []
                }
            ]
        }
    }

    props.chartOptions = {
        responsive: true,
        // maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                intersect: false,
                position: 'nearest',
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';

                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y + '%'
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            yAxis: {
                min: 0,
                max: 100,
                ticks: {
                    callback: function (value, index, values) {
                        return '%';
                    }
                },
                display: false,
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

    if(data.direction && data.direction.length) {
        const datasetNotNull = data.direction.filter(({count}) => count)
        props.chartData.labels = datasetNotNull.map(({name}) => name)
        props.chartData.datasets[0].data = datasetNotNull.map(({count}) => (count / data.readings * 100).toFixed())
    }

    return props
}

const LongRead = () => {
    const now = new Date()
    const [data, setData] = useState(false)
    const filterReducer = (state, newFilter) => {

        if(JSON.stringify(state) === JSON.stringify(newFilter))
            return state

        getStatistic(newFilter).then((res) => {
            if(res.success === false)
                return setError(res.message)

            setData(res.data)
        })

        return newFilter
    }
    const [filter, filterDispatch] = useReducer(filterReducer, {year: now.getFullYear(), month: false, day: false, eventId: false, directionId: false})
    const [error, setError] = useState(false)

    useEffect(() => {
        if(data === false)
            getStatistic(filter).then((res) => {
                if(res.success === false)
                    return setError(res.message)

                setData(res.data)
            })
    }, [data, filter])

    const {chartOptions, chartData} = initBarChart(data)

    if(error)
        return (
            <div>
                {error}
            </div>
        )

    if(data === false)
        return <Loading/>

    return (
        <div className="page-long-read page">
            <PageTop filter={filter} filtersList={['date', 'directions', 'events']} filterChange={filterDispatch}/>
            <div className="page-long-read-content">
                <div className="page-long-read-content__left">
                    <DashboardBlock title="Статистика лонгрида" icon={readIcon} className="long-read">
                        <div className="long-read-block">
                            <img src={eye} alt=""/>
                            <div className="long-read-block-text">
                                <div>Прочтений</div>
                                <span>лонгрида</span>
                            </div>
                            <div className="long-read-block-value long-read-block-value--gray">
                                {data.readings}
                            </div>
                        </div>
                        <div className="long-read-block">
                            <img src={book} alt=""/>
                            <div className="long-read-block-text">
                                <div>Дочитываний</div>
                                <span>лонгрида</span>
                            </div>
                            <div className="long-read-block-value long-read-block-value--blue">
                                {data.reReadings}
                            </div>
                        </div>
                        <div className="long-read-block">
                            <img src={link} alt=""/>
                            <div className="long-read-block-text">
                                <div>Переходов</div>
                                <span>по ссылке</span>
                            </div>
                            <div className="long-read-block-value long-read-block-value--green">
                                {data.transitions}
                            </div>
                        </div>
                    </DashboardBlock>
                    <DashboardBlock title="Разбивка по специальностям" icon={nurse} className="directions-chart">
                        {data.direction && data.direction.length && <Bar options={chartOptions} data={chartData} />}
                    </DashboardBlock>
                </div>

                <div className="page-long-read-content__right">
                    {
                        !data || !data.cities ? '' :
                            <TopFive valueType="percent" total={data.readings} title="Города" icon={city} values={data.cities.map(({name, count},index) => ({id: name+count+index, title: name, value: count}))} />
                    }
                    <DashboardBlock title="Статистика лонгрида" icon={tape} className="long-read__videos-and-tests">
                        {
                            !data.tests ? '' :
                                data.tests.map((value, index) => (
                                    <div key={index} className="long-read-block">
                                        <img src={note} alt=""/>
                                        <div className="long-read-block-text">
                                            <div>Тест №{index+1}</div>
                                            <span>прошли</span>
                                        </div>
                                        <div className="long-read-block-value long-read-block-value--green">
                                            {value}
                                        </div>
                                    </div>
                                ))
                        }
                        {
                            !data || !data.videos ? '' :
                                data.videos.map((value, index) => (
                                    <div key={index} className="long-read-block">
                                        <img src={tape} alt=""/>
                                        <div className="long-read-block-text">
                                            <div>Видео №{index+1}</div>
                                            <span>воспроизвели</span>
                                        </div>
                                        <div className="long-read-block-value long-read-block-value--green">
                                            {value}
                                        </div>
                                    </div>
                                ))
                        }
                    </DashboardBlock>
                </div>
            </div>
        </div>
    )
}

export default LongRead
