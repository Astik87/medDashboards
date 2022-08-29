import React from "react"

import './style.css'

import VisitsApi from "../../api/VisitsApi";
import BaseWithFilter from "../BaseWithFilter";
import Loading from "../../components/Loading";
import PaginationLinks from "../../components/PaginationLinks";
import {withRouter} from "../../utils/RouteUtils";
import Empty from "../../components/Empty";
import DashboardBlock from "../../components/DashboardBlock";
import LineChart from "../../components/LineChart";
import PlanCard from "../../components/Plan/PlanCard";

import PlanDetailModal from "../../components/Plan/PlanDetailModal";

class Visits extends BaseWithFilter {

    constructor(props) {
        super(props);

        const {routeParams} = this.props

        this.state = {
            page: routeParams.page ? routeParams.page : 1,
            limit: 15,
            plans: false,
            plansCount: false,
            currentPlan: false,
            isLoading: true,
            error: false,
            ...this.state
        }
    }

    /**
     * Фильтры для данной страницы
     * @return {[string]}
     */
    getFiltersList = () => {
        return ['date']
    }

    /**
     * Получение списка планов при монтировании компонента
     */
    componentDidMount() {
        const {filter, page, limit} = this.state

        this.getPlans(filter, page, limit)
    }

    /**
     * Управление перерисовкой компонента
     * Перерисовывается только при изменении состояния
     * При переключении на другую страницы (this.state.page) получаем новый список планов
     * @param nextProps
     * @param nextState
     * @param nextContext
     * @return {boolean}
     */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const pageInRoute = nextProps.routeParams.page ? nextProps.routeParams.page : 1

        const {filter, limit} = nextState

        if (pageInRoute !== this.state.page) {
            nextState.page = pageInRoute
            this.getPlans(filter, pageInRoute, limit)
            return true
        }

        return JSON.stringify(nextState) !== JSON.stringify(this.state)
    }

    /**
     * При изменении фильтра получаем новый список планов и меняем url текущей страницы
     * @param {{}} filter
     */
    onChangeFilter = (filter) => {
        const {limit} = this.state
        window.history.pushState({}, undefined, this.props.baseUri)

        this.getPlans(filter, 1, limit)
    }

    /**
     * Получить пданы из api
     * @param {{year: number, month: number, day: number}} filter
     * @param {number|boolean} page номер страницы
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
                this.setState({
                    plans: response.plans.rows,
                    plansCount: response.plans.count,
                    isLoading: false,
                    page: page
                })
        })
    }

    /**
     * Открвть дктатьную информацию прлана
     * @param {number} planIndex индекс плана в массиве this.state.plans
     */
    setCurrentPlan = (planIndex) => {
        this.setState({currentPlan: planIndex})
    }

    /**
     * Компонент модалки с детальной информацией о плане
     * @param {number} planIndex индекс плана в массиве this.state.plans
     * @return {boolean|*}
     */
    getPlanDetailElement(planIndex) {
        const {plans} = this.state
        const plan = plans[planIndex]

        if (!plan)
            return false

        return (<PlanDetailModal plan={plan} close={this.closePlan}/>)
    }

    /**
     * Закрыть модалку с детальной информацией плана
     */
    closePlan = () => {
        this.setState({currentPlan: false})
    }

    /**
     * Получить массив планов для графика
     * @param {[{name: string, plan: number, fact: number}]} plans массив планов
     * @return {({data: [number], options: {borderColor: string, label: string}}|{data: [number], options: {borderColor: string, backgroundColor: (function(*): *), label: string}})[]}
     */
    getPlansDataForChart(plans) {
        const plansData = plans.map(({plan, name}) => ({label: name, value: plan}))
        const factData = plans.map(({fact, name}) => ({label: name, value: fact}))

        const plansDatasetOptions = {
            borderColor: '#3361FF',
            label: 'Plan',
            backgroundColor: function (context) {
                const chart = context.chart
                const {ctx, chartArea} = chart

                if (!chartArea)
                    return

                const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
                gradient.addColorStop(0, 'rgba(51, 97, 255, 0)')
                gradient.addColorStop(0.5, 'rgba(51, 97, 255, 0.10)')

                return gradient
            },
        }

        const factDatasetOptions = {
            borderColor: '#34C759',
            label: 'Fact',
            backgroundColor: function (context) {
                const chart = context.chart
                const {ctx, chartArea} = chart

                if (!chartArea)
                    return

                const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
                gradient.addColorStop(0, 'rgba(96, 255, 136, 0)')
                gradient.addColorStop(0.5, 'rgba(52, 199, 89, 0.10)')

                return gradient
            },
        }

        return [{options: plansDatasetOptions, data: plansData}, {options: factDatasetOptions, data: factData}]
    }

    content = () => {
        const {isLoading, error, plans, page, plansCount, limit, currentPlan} = this.state

        if (error)
            return <div>{error}</div>

        if (isLoading)
            return <Loading/>

        const {baseUri} = this.props
        const pagesCount = plansCount < limit ? false : Math.ceil(plansCount / limit)

        return (
            <div className="plans-page page__content">
                {
                    currentPlan !== false
                    &&
                    this.getPlanDetailElement(currentPlan)
                }
                <div className="plans-list">
                    {
                        plans.length
                            ?
                            plans.map((plan, index) => <PlanCard key={plan.id} data={plan} open={() => {this.setCurrentPlan(index)}}  />)
                            :
                            <Empty />
                    }
                </div>
                <DashboardBlock title="Total touch" className="plans-chart" >
                    <LineChart datasets={this.getPlansDataForChart(plans)} />
                </DashboardBlock>
                {
                    pagesCount > 0
                    &&
                    <PaginationLinks currentPage={+page} pagesCount={pagesCount} baseUri={baseUri}/>
                }
            </div>
        )
    }
}

export default withRouter(Visits)
