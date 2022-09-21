import {useContext} from "react";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

import './style.css'
import nurse from "@images/nurse.svg"
import DashboardBlock from "@components/General/DashboardBlock";
import {Button} from "@mui/material";
import {CRMContext} from "@pages/CRM/CRMContext"

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

const CRMResult = (props) => {

    const {failuresData, chartData, event, campaign} = props

    const {restart} = useContext(CRMContext)

    const data = {
        labels,
        datasets: chartData
    }

    const failedData = {
        labels,
        datasets: failuresData
    }

    if(!failuresData || !chartData)
        return ''

    return (
        <div className="page">
            <div className="current-filter">
                <span>{campaign.label}</span>
                <span className="separator">---></span>
                <span>{event.label}</span>
                <Button onClick={restart} variant="contained" className="edit" startIcon={<BorderColorOutlinedIcon />}>Edit</Button>
            </div>

            <DashboardBlock className="crm-chart" title="Воронка привлечения врачей" icon={nurse}>
                <div className="crm-result__chart">
                        <Bar data={data} options={chartOptions} />
                </div>
                <div className="crm-result__table">
                    <div className="crm-result__table-title">
                        {
                            chartData.map((dataset) => <span key={dataset.label}>{dataset.label}</span>)
                        }
                    </div>

                    <div className="crm-result__table-value">
                        {
                            chartData.map((dataset, datasetIndex) => {
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
            <DashboardBlock className="crm-chart" title="Воронка отказов" icon={nurse}>
                <div className="crm-result__chart">
                    <Bar data={failedData} options={chartOptions} />
                </div>
                <div className="crm-result__table">
                    <div className="crm-result__table-title">
                        {
                            failuresData.map((dataset) => <span key={dataset.label}>{dataset.label}</span>)
                        }
                    </div>

                    <div className="crm-result__table-value">
                        {
                            failuresData.map((dataset, datasetIndex) => {
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
        </div>
    )
}

export default CRMResult
