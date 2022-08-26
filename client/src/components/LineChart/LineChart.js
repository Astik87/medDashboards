import React from "react";
import {Line} from "react-chartjs-2"
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Filler,
    Tooltip
} from "chart.js";

/**
 *
 * @param {[{label: string, value: number}]} data
 * @return {{chartOptions: {}, chartData: {}}}
 */
const initChart = (data) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend
    );

    const props = {
        chartOptions: {},
        chartData: {
            labels: [],
            datasets: [
                {
                    yAxisID: 'yAxis',
                    xAxisID: 'xAxis',
                    label: 'Users',
                    backgroundColor: function(context) {
                        const chart = context.chart
                        const {ctx, chartArea} = chart

                        if (!chartArea)
                            return

                        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
                        gradient.addColorStop(0, 'rgba(51, 97, 255, 0)')
                        gradient.addColorStop(0.5, 'rgba(51, 97, 255, 0.19)')

                        return gradient
                    },
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

    if(data && data.length) {
        props.chartData.labels = data.map(({label}) => label)
        props.chartData.datasets[0].data = data.map(({value}) => value)
    }

    return props
}

const LineChart = (props) => {
    const {data} = props

    const {chartOptions, chartData} = initChart(data)

    return <Line options={chartOptions} data={chartData} />
}

export default LineChart
