import React from "react"

import './style.css'

import done from './img/done.svg'
import ongoing from './img/ongoing.svg'
import preparing from './img/preparing.svg'

import VisitsApi from "../../api/VisitsApi";
import BaseWithFilter from "../BaseWithFilter";
import Loading from "../../components/Loading";
import PaginationLinks from "../../components/PaginationLinks";
import {withRouter} from "../../utils/RouteUtils";

class Visits extends BaseWithFilter {

    constructor(props) {
        super(props);

        const {routeParams} = this.props

        this.state = {
            page: routeParams.page ? routeParams.page : 1,
            limit: 3,
            plans: false,
            currentPlan: false,
            isLoading: true,
            error: false, ...this.state
        }
    }

    getFiltersList = () => {
        return ['date']
    }

    /**
     * Получить пданы из api
     * @param {{year: number, month: number, day: number}} filter
     * @param {number} page номер страницы
     * @param {number} limit максимальное кол-ва элементов на странице
     * @return {boolean}
     */
    getPlans = (filter, page, limit) => {
        if (!filter || !page || !limit)
            return false

        this.setState({isLoading: true})
        VisitsApi.getPlans(filter, page, limit).then(response => {
            if (!response.success)
                this.setState({error: response.message})
            else
                this.setState({plans: response.plans.rows, plansCount: response.plans.count, isLoading: false})
        })
    }

    componentDidMount() {
        const {filter, page, limit} = this.state

        this.getPlans(filter, page, limit)
    }

    onChangeFilter = (filter) => {
        const {page, limit} = this.state

        this.getPlans(filter, page, limit)
    }

    /**
     * Если число num меньше 10 добавляет '0' к началу строки для даты
     * @param {number} num
     * @return {string}
     */
    padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    /**
     * Приводит дату в формат дд.мм.гггг
     * @param {Date} date
     * @return {string}
     */
    formatDate(date) {
        let strDate = ''

        strDate += this.padTo2Digits(date.getDate())
        strDate += '.' + this.padTo2Digits(date.getMonth())
        strDate += '.' + date.getFullYear()
        strDate += ' ' + this.padTo2Digits(date.getHours())
        strDate += ':' + this.padTo2Digits(date.getMinutes())

        return strDate
    }

    /**
     * HTML список планов
     * @param {[{id: number, name: string, plan: number, fact: number, start: string, end: string}]} plans
     * @return {[]}
     */
    getPlansElementList(plans) {
        const plansList = []

        const now = new Date()

        plans.forEach(({id, name, plan, fact, start, end}) => {
            let status = 'Preparing'
            start = new Date(start)
            end = new Date(end)

            if (end < now)
                status = 'Done'

            if (start < now && end > now)
                status = 'Ongoing'

            const planBlacksList = [
                {title: 'Plan', value: plan},
                {title: 'Fact', value: fact}
            ]

            if (status !== 'Preparing')
                planBlacksList.push({title: status === 'Done' ? 'Result' : 'Target', value: Math.abs(plan - fact)})

            const planColorClasses = {
                Done: 'green',
                Ongoing: 'blue',
                Preparing: 'yellow'
            }

            const statusIcons = {
                Done: <img src={done} alt=""/>,
                Ongoing: <img src={ongoing} alt=""/>,
                Preparing: <img src={preparing} alt=""/>
            }

            plansList.push(
                <div key={id} className={`plans-list__item ${planColorClasses[status]}`}>
                    <div className="plans-list__item-left">
                        <div className="plans-list__item-name">
                            {name}
                        </div>
                        <div className="plans-list__item-status">
                            {status} {statusIcons[status]}
                        </div>
                        <div className="plans-list__item-result-percent">
                            {(fact / plan * 100).toFixed()}%
                        </div>

                        <div className="plans-list__item-start">
                            {this.formatDate(start)}
                        </div>
                    </div>
                    <div className="plans-list__item-right">
                        {
                            planBlacksList.map(({title, value}, index) => (
                                <div key={id + '.' + index} className="plans-list__item-block">
                                    <span className="plans-list__item-block__title">
                                        {title}
                                    </span>
                                    <span className="plans-list__item-block__value">
                                        {value}
                                    </span>
                                </div>
                            ))
                        }
                        <div className="plans-list__item-end">
                            {this.formatDate(end)}
                        </div>
                    </div>
                </div>
            )
        })

        return plansList
    }

    content = () => {

        const {isLoading, error, plans, page, plansCount, limit, filter} = this.state

        const pageInProps = this.props.routeParams.page ? this.props.routeParams.page : 1

        console.log(pageInProps)

        if(pageInProps && pageInProps !== page) {
            this.setState({page: pageInProps})
            this.getPlans(filter, pageInProps, limit)
        }

        if (error)
            return <div>{error}</div>

        if (isLoading)
            return <Loading/>

        const currentUri = window.location.pathname.replace(`/${page}`, '')

        return (
            <div className="plans-page page__content">
                <div className="plans-list">
                    {this.getPlansElementList(plans)}
                </div>
                <PaginationLinks currentPage={page} pagesCount={Math.ceil(plansCount/limit)} baseUri={currentUri} />
            </div>
        )
    }
}

export default withRouter(Visits)
