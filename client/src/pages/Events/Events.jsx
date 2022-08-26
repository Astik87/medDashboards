import React from "react";

import './style.css'
import Loading from "../../components/Loading";
import DashboardBlock from "../../components/DashboardBlock";
import TopFive from "../../components/TopFive";
import LineChart from "../../components/LineChart";
import EventsApi from "../../api/EventsApi";

import eventEye from './img/eye.svg'
import eye from '../img/eye.svg'
import nurse from '../img/nurse.svg'
import BaseWithFilter from "../BaseWithFilter";

class Events extends BaseWithFilter {
    constructor(props) {
        super(props);

        this.state = {data: false, error: false, isLoading: true, ...this.state}
    }

    setStatistic(filter) {
        this.setState({isLoading: true})
        EventsApi.getStatistic(filter).then((response) => {
            if (!response.success)
                this.setState({error: response.message})
            else
                this.setState({data: response.data})

            this.setState({isLoading: false})
        })
    }

    componentDidMount() {
        const {filter} = this.state

        this.setStatistic(filter)
    }

    onChangeFilter = (filter) => {
        this.setStatistic(filter)
    }

    content = () => {

        const {data, error, isLoading} = this.state

        if (error)
            return <div className="error">{error}</div>

        if(data === false)
            return <Loading/>

        return (
            <div className="events-page__content">
                <div className="events-page__left">
                    <DashboardBlock className="events-visits-chart" title="Кол-во уникальных зрителей (1 день)"
                                    icon={eventEye}>
                        {
                            isLoading
                                ? <Loading/>
                                : <LineChart data={data.uniqueViewers}/>
                        }
                    </DashboardBlock>

                    <div className="events-page__tops">
                        <TopFive title="Специальности" icon={nurse} isLoading={isLoading}
                                 values={isLoading || data.directions.map(({name, count}) => ({
                                     id: name + count,
                                     title: name,
                                     value: count
                                 }))}/>
                        <TopFive title="Города" valueType="percent" total={data.total} icon={nurse}
                                 isLoading={isLoading} values={isLoading || data.cities.map(({name, count}) => ({
                            id: name + count,
                            title: name,
                            value: count
                        }))}/>
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
                        <DashboardBlock className="events-page__right-top-item" title="Глубина просмотра"
                                        icon={eye}>
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
        )
    }
}

export default Events
