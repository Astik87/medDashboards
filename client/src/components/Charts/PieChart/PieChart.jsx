import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Pie} from 'react-chartjs-2'

const initPieChart = () => ChartJS.register(ArcElement, Tooltip, Legend)

const PieChart = (props) => {

    const {labels, datasets, className} = props

    initPieChart()

    return (
        <div className={className || ''}>
            <Pie data={{labels, datasets}} />
        </div>
    )
}

export default PieChart