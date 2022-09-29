import {Alert} from '@mui/material'

import './style.css'
import successIcon from '@images/success.svg'

import {DashboardBlock, Loading} from "@components/General"
import MedtouchBlock from "./MedtouchBlock"
import UserApi from "@api/UserApi"
import BaseWithFilter from "@pages/BaseWithFilter"
import MedtouchChart from './MedtouchChart'

class Medtouch extends BaseWithFilter {

    groupColors = ['#34C759', '#007AFF', '#FF9500', '#FF784E']

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            data: false,
            error: false,
            ...this.state
        }
    }

    componentDidMount() {
        const {filter} = this.state
        this.getUsersCountByGroups(filter)
    }

    getFiltersList = () => {
        return ['date', 'events', 'directions']
    }

    onChangeFilter = (newFilter) => {
        this.getUsersCountByGroups(newFilter)
    }

    getUsersCountByGroups = async (filter) => {
        this.setState({loading: true})
        const response = await UserApi.getUsersCountByGroups(filter)

        if (!response.success)
            return this.setState({error: response.message, loading: false})

        this.setState({loading: false, data: response.data})
    }

    content() {

        const {loading, error, data} = this.state

        if (error)
            return (
                <div className="page__content">
                    <Alert severity="error">{error}</Alert>
                </div>
            )

        if (loading)
            return <Loading/>

        return (
            <div className="page__content">
                <DashboardBlock
                    className="user-groups"
                    title="Статистика пользователей"
                    icon={successIcon}>
                    {
                        data.groups.map(
                            ({name, count}, index) =>
                                <MedtouchBlock
                                    key={index}
                                    title={name}
                                    subtitle="пользователи"
                                    value={count}
                                    color={this.groupColors[index]}/>
                        )
                    }

                    <MedtouchChart className="user-groups__chart" data={data} colors={this.groupColors}/>
                </DashboardBlock>
            </div>
        )
    }
}

export default Medtouch