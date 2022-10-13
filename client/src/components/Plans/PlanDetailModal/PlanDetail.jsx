import React from "react"
import {DataGrid} from "@mui/x-data-grid"
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

function VideoUrlRenderer({value}) {
    if(!value)
        return ''

    return (
        <div className="visit-video-link">
            {
                value.split(' ').map(link => (
                    <>
                        <a href={link} target="_blank">
                            {link}
                        </a>
                        <br/>
                    </>
                ))
            }
        </div>
    )
}

const cols = [
    {field: 'date', headerName: 'Дата', width: 150},
    {field: 'telemarketer', headerName: 'Телемаркетолог', width: 150},
    {field: 'medicalRepresentative', headerName: 'Мед. представитель', width: 150},
    {field: 'doctor', headerName: 'Доктор', width: 150},
    {field: 'doctorDirection', headerName: 'Специальность', width: 150},
    {field: 'status', headerName: 'Проведен', width: 150},
    {field: 'videoUrl', headerName: 'URL', width: 400, renderCell: VideoUrlRenderer},
]

const PlanDetailModal = (props) => {
    const {plan, close} = props

    const rows = []

    if (plan) {
        plan.telemarketers.forEach((telemarketer, telemarketerIndex) => {

            telemarketer.visits.forEach(({time, name, doctor, doctorDirection, status, videoUrl}, visitIndex) => {
                rows.push({
                    id: `${telemarketerIndex}${visitIndex}`,
                    date: formatDate(new Date(time)),
                    telemarketer: telemarketer.name,
                    medicalRepresentative: name,
                    doctor,
                    doctorDirection,
                    videoUrl,
                    status: status ? '+' : '-'
                })
            })
        })
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
                                    rowHeight={100}
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
