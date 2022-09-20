import React, {Component} from "react";

import {PageTop} from "@components/Layout";
import {getDateForFilter} from "@utils/DateUtils";

class BaseWithFilter extends Component {
    constructor(props) {
        super(props);

        const now = new Date()
        this.state = {
            _filter: {year: now.getFullYear(), month: false, day: false, eventId: false, directionId: false},
            filter: getDateForFilter({year: now.getFullYear(), month: false, day: false})
        }
    }

    getFiltersList = () => {
        return ['date', 'directions', 'events']
    }

    /**
     * Кастомная кнопка рядом с кнопкой экспорта страницы
     */
    pageTopCustomBtn = () => {
        return ''
    }

    onChangeFilter = (filter) => {}

    setFilter = (filter) => {
        if(JSON.stringify(this.state._filter) === JSON.stringify(filter))
            return filter

        const resultFilter = getDateForFilter(filter)

        if(filter.eventId)
            resultFilter.eventId = filter.eventId

        if(filter.directionId)
            resultFilter.directionId = filter.directionId

        console.log(resultFilter)

        this.onChangeFilter(resultFilter)

        this.setState({filter: resultFilter, _filter: filter})
    }

    render() {
        const {_filter} = this.state

        return (
            <div className="page">
                <PageTop
                    filter={_filter}
                    filtersList={this.getFiltersList()}
                    filterChange={this.setFilter}
                    customBtn={this.pageTopCustomBtn()}/>

                {this.content()}
            </div>
        )
    }
}

export default BaseWithFilter
