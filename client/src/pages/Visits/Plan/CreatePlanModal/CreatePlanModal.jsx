import React, {useState} from "react"
import {styled} from "@mui/material"
import {
    Stack, TextField,
    Button, Modal,
    Fade, Box,
    Typography
} from "@mui/material"
import {LocalizationProvider} from "@mui/x-date-pickers"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import {DateTimePicker} from "@mui/x-date-pickers"

import './style.css'
import Loading from "@components/Loading";

const CreateBtn = styled(Button)({
    backgroundColor: '#3361FF',
    fontWeight: 600,
    padding: 10
})

const formStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: 5,
    p: 4,
    maxWidth: '90vw'
}

const messageModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: 5,
    p: 4,
    border: false,
    outline: false,
    minWidth: 250,
    maxWidth: '90vw'
}

const validateFormData = (data) => {
    const {name, start, end, plan} = data

    return name.trim().length > 3 && start && end && start.$d < end.$d && plan > 0
}

const CreatePlanModal = (props) => {

    const {onClose, isOpen, createPlan} = props

    const [formData, setFormData] = useState({name: '', start: '', end: '', plan: false})
    const [error, setError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const createBtnHandler = () => {
        const {name, start, end, plan} = formData

        const planName = name.trim()

        if (!validateFormData(formData) || typeof createPlan !== 'function')
            return

        setIsLoading(true)
        createPlan(planName, start, end, plan).then((response) => {
            if (!response.success) {
                setIsLoading(false)
                setError(response.message)
                return
            }

            setIsLoading(false)
            setIsSuccess(true)
        })
    }

    return (
        <Modal
            onClose={onClose}
            open={isOpen}>
            <Fade in={isOpen}>
                <Box sx={formStyle}>

                    {/* Success modal */}
                    <Modal
                        onClose={() => onClose(true)}
                        open={isOpen && isSuccess}>

                        <Fade in={isOpen && isSuccess}>
                            <Box sx={messageModalStyle}>
                                <Typography variant="h6" style={{textAlign: 'center'}} color="#34c759">
                                    План успешно создан
                                </Typography>
                            </Box>
                        </Fade>

                    </Modal>

                    {/*Loading modal*/}
                    <Modal
                        open={isOpen && isLoading}>

                        <Fade in={isOpen && isLoading}>
                            <Box sx={messageModalStyle}>
                                <Loading/>
                            </Box>
                        </Fade>

                    </Modal>

                    {/*Error modal*/}
                    <Modal
                        onClose={() => setError(false)}
                        open={isOpen && !!error}>

                        <Fade in={isOpen && !!error}>
                            <Box sx={messageModalStyle}>
                                <Typography variant="h6" style={{textAlign: 'center'}}
                                            color="#d32f2f">{error}</Typography>
                            </Box>
                        </Fade>

                    </Modal>

                    <div className="create-plan">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={3}>
                                <TextField required={true} error={formData.name.trim().length < 3} label="Название" value={formData.name}
                                           onChange={({target}) => setFormData({...formData, name: target.value})}/>

                                <TextField type="number" required={true} error={formData.plan <= 0} value={formData.plan}
                                           onChange={({target}) => setFormData({...formData, plan: target.value})}/>

                                <DateTimePicker
                                    className="create-plan__date-start"
                                    label="Дата начала"
                                    inputFormat="DD.MM.YYYY HH:mm"
                                    value={formData.start}
                                    onChange={(value) => setFormData({...formData, start: value})}
                                    renderInput={(params) => <TextField required={true} {...params} />}
                                />
                                <DateTimePicker
                                    className="create-plan__date-start"
                                    label="Дата окончания"
                                    inputFormat="DD.MM.YYYY HH:mm"
                                    disabled={!formData.start}
                                    minDateTime={formData.start}
                                    value={formData.end}
                                    onChange={(value) => setFormData({...formData, end: value})}
                                    renderInput={(params) => <TextField required={true} {...params} />}
                                />
                                <CreateBtn disabled={!validateFormData(formData)} onClick={createBtnHandler}
                                           variant="contained">Создать</CreateBtn>
                            </Stack>
                        </LocalizationProvider>
                    </div>
                </Box>
            </Fade>
        </Modal>
    )
}

export default CreatePlanModal
