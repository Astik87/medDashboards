import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import nurse from "@images/nurse.svg";
import DashboardBlock from "@components/General/DashboardBlock";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['Доставлено', 'Прочитано', 'Перешли по ссылке', 'Регистрация', 'Присутствие']

const chartOptions = {
    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
}

const CRMResultChart = ({datasets}) => {

    const data = {
        labels,
        datasets
    }

    return (
        <DashboardBlock className="crm-chart" title="Воронка привлечения врачей" icon={nurse}>
            <div className="crm-result__chart">
                <Bar data={data} options={chartOptions} />
            </div>
            <div className="crm-result__table">
                <div className="crm-result__table-title">
                    {
                        datasets.map((dataset) => <span key={dataset.label}>{dataset.label}</span>)
                    }
                </div>

                <div className="crm-result__table-value">
                    {
                        datasets.map((dataset, datasetIndex) => {
                            const cols = []
                            dataset.data.forEach((value, index) => {
                                cols.push(<span key={dataset.label+index} className="rows">{value || '-'}</span>)
                            })
                            return <div key={datasetIndex+dataset.label} className="cols">{cols}</div>
                        })
                    }
                </div>
            </div>
        </DashboardBlock>
    )
}

export default CRMResultChart
