import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import {Bar} from 'react-chartjs-2'

const initChart = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    )
}

const getChartProps = (data, colors) => {
    const labels = data.groups.map(({name}) => name)

    const datasets = [
        {
            label: 'Users',
            data: data.groups.map(({count}) => {
                return (count / data.total * 100).toFixed(1)
            }),
            backgroundColor: colors,
            borderRadius: 10
        }
    ]

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                intersect: false,
                position: 'nearest',
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || ''

                        if (label) {
                            label += ': '
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y + '%'
                        }
                        return label
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
                        return value + '%'
                    },
                },
                display: false,
            },
            xAxis: {
                grid: {
                    display:false
                },
                ticks: {
                    font: {
                        size: 10
                    }
                }
            }
        }
    }

    return {options, data: {labels, datasets}}
}

const MedtouchChart = (props) => {

    const {className, data, colors} = props

    return (
        <div className={className || ''}>
            <Bar {...getChartProps(data, colors)} />
        </div>
    )
}

export default MedtouchChart