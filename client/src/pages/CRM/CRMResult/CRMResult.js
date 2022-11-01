import {useContext, useState} from "react";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import {
    Modal,
    Fade,
    Box
} from '@mui/material'

import './style.css'

import CRMResultChart from "./CRMResultChart";
import {Button} from "@mui/material";
import {CRMContext} from "@pages/CRM/CRMContext"
import {modalBoxStyle} from "@styles/Modal";
import CRMResultUsers from "@pages/CRM/CRMResult/CRMResultUsers";
import {PageTop} from "@components/Layout";

const CRMResult = (props) => {

    const {usersList, bounceFunnel, funnelAttraction, event, campaign} = props
    const {restart} = useContext(CRMContext)

    const [usersListIsShow, setUsersListIsShow] = useState(false)

    return (
        <>
            <PageTop filtersList={false}/>
            <div className="current-filter">
                <span>{campaign.label}</span>
                <span className="separator">-></span>
                <span>{event.label}</span>
            </div>

            <div className="crm-top__btns">
                <Button
                    onClick={restart}
                    variant="contained"
                    className="edit"
                    startIcon={<BorderColorOutlinedIcon/>}>
                    Edit
                </Button>
                <Button
                    onClick={() => setUsersListIsShow(true)}
                    variant="contained"
                    className="edit"
                    startIcon={<BorderColorOutlinedIcon/>}>
                    Users List
                </Button>
            </div>

            <CRMResultChart title="Воронка привлечения врачей" datasets={funnelAttraction}/>
            <CRMResultChart title="Воронка отказов" datasets={bounceFunnel}/>

            <Modal
                onClose={() => setUsersListIsShow(false)}
                open={usersListIsShow}>
                <Fade
                    in={usersListIsShow}>
                    <Box
                        sx={modalBoxStyle}>
                        <CRMResultUsers usersList={usersList}/>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default CRMResult
