import React from "react";
import {
    Alert
} from '@mui/material'

import './style.css'

import EventsApi from "@api/EventsApi";
import BaseWithFilter from "@pages/BaseWithFilter";
import {DashboardBlock, Loading, TotalCountBlock} from "@components/General";
import Progress from "@components/General/Progress";
import EventPromotionsChart from './EventPromotionsChart'
import eye from "@images/eye.svg";

class EventPromotions extends BaseWithFilter {

    promotionChartColors = ['#3361FF', '#567CFF', '#7796FF', '#99B0FF', '#B1C3FF']
    promotionDirectionsChartColors = ['#34C759', '#46D369', '#63E083', '#79EA95', '#94F7AC']
    eventChartColors = ['#FF9500', '#FFA628', '#FFB44A', '#FFC067', '#FFC87B']

    constructor(props) {
        super(props);

        this.state = {
            error: false,
            loading: true,
            statistic: false,
            ...this.state
        }
    }

    onChangeFilter = (filter) => {
        this.getStatistic(filter)
    }

    async getStatistic(filter) {
        this.setState({loading: true})
        const response = await EventsApi.getPromotionStatistic(filter)

        if (!response.success)
            return this.setState({error: response.message})

        this.setState({loading: false, statistic: response.data})

    }

    componentDidMount = () => {
        const {filter} = this.state
        this.getStatistic(filter)
    }

    content() {
        const {loading, statistic, error} = this.state

        if (error)
            return (
                <div className="page error">
                    <Alert severity="error">{error}</Alert>
                </div>
            )


        if (loading || !statistic)
            return <Loading/>

        const promotionPercent = statistic.promotion.total ? (statistic.promotion.watched/statistic.promotion.total*100).toFixed() : 0
        const eventPercent = statistic.event.total ? (statistic.event.watched/statistic.event.total*100).toFixed() : 0

        return (
            <div className="page">
                <div className="promotion-statistic">
                    <div className="promotion-statistic__line">
                        <DashboardBlock className="promotion-statistic__block" hideRightContent>
                            <Progress title="% смотревших из базы продвижения" value={promotionPercent}/>
                        </DashboardBlock>
                        <DashboardBlock className="promotion-statistic__block" hideRightContent>
                            <Progress title="% смотревших не из базы продвижения" value={eventPercent}/>
                        </DashboardBlock>
                        <div className="promotion-statistic__block promotion-statistic__total">
                            <TotalCountBlock
                                title="Кол-во не из базы продвижения"
                                subtitle="Пользователей"
                                icon={eye}
                                isLoading={loading}
                                count={statistic.event.total}/>
                            <TotalCountBlock
                                title="Кол-во из базы продвижения"
                                subtitle="Пользователей"
                                icon={eye}
                                isLoading={loading}
                                count={statistic.promotion.total}/>
                        </div>
                    </div>

                    <div className="promotion-statistic__line">
                        <EventPromotionsChart
                            title="% из базы продвижения по каналам коммуникаций"
                            colors={this.promotionChartColors}
                            data={statistic.promotion.utm}
                            total={statistic.promotion.total} />

                        <EventPromotionsChart
                            title="Кол-во из базы продвижения"
                            colors={this.promotionDirectionsChartColors}
                            data={statistic.promotion.directions}
                            total={statistic.promotion.total} />

                        <EventPromotionsChart
                            title="Кол-во не из базы продвижения"
                            colors={this.eventChartColors}
                            data={statistic.event.directions}
                            total={statistic.event.total} />
                    </div>
                </div>
            </div>
        )
    }
}

export default EventPromotions