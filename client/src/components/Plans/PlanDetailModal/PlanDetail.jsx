import React from "react"
import {DataGrid} from "@mui/x-data-grid"
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done'
import {Modal, Fade, Box} from "@mui/material"

import './style.css'
import {formatDate} from "@utils/DateUtils";

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: 5,
    p: 2,
    maxWidth: '90vw',
    maxHeight: '90vh',
}

const cols = [
    {field: 'date', headerName: 'Дата', width: 150},
    {field: 'telemarketer', headerName: 'Телемаркетолог', width: 150},
    {field: 'medicalRepresentative', headerName: 'Мед. представитель', width: 150},
    {field: 'doctor', headerName: 'Доктор', width: 150},
    {field: 'doctorDirection', headerName: 'Специальность', width: 150},
    {field: 'status', headerName: 'Проведен', width: 150},
]


const PlanDetailModal = (props) => {
    const {plan, close} = props

    const rows = []

    if(plan) {
        plan.telemarketers.forEach((telemarketer, telemarketerIndex) => {

            telemarketer.visits.forEach(({time, name, doctor, doctorDirection, status}, visitIndex) => {
                rows.push({
                    id: `${telemarketerIndex}${visitIndex}`,
                    date: formatDate(new Date(time)),
                    telemarketer: telemarketer.name,
                    medicalRepresentative: name,
                    doctor,
                    doctorDirection,
                    status: status ? '+' : '-'
                })
            })
        })

        console.log(rows)
    }
    return (
        <Modal
            className="plan-modal"
            open={!!plan}
            onClose={close}>
            <Fade in={!!plan}>
                <Box className="plan-wrapper" sx={modalStyle}>
                    {
                        !!plan &&
                        <div>
                            <div className="plan">
                                <DataGrid

                                    columns={cols}
                                    rows={rows}
                                />
                            </div>
                        </div>
                    }
                </Box>
            </Fade>
        </Modal>
    )
}

export default PlanDetailModal
