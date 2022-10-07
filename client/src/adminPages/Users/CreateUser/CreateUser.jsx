import {
    Modal,
    Fade,
    Box,
    Backdrop,
    CircularProgress,
    Button,
    TextField,
    Checkbox,
    FormControlLabel,
    Stack,
    Alert,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from "@mui/material"

import {modalBoxStyle} from "@styles/Modal"
import {useContext, useState} from "react"
import UserApi from "@api/UserApi"
import {UsersTableContext} from "@/adminPages/Users/Users"
import {authRoutes} from "@globals/Routes"

const CreateUser = (props) => {
    const routeOptions = authRoutes.filter(({code}) => code).map(({title, code}) => ({label: title, value: code}))
    const formFields = [
        {fieldName: 'name', label: 'Имя', inputType: 'text', type: 'string'},
        {fieldName: 'login', label: 'Логин', inputType: 'text', type: 'string'},
        {fieldName: 'password', label: 'Пароль', inputType: 'password', type: 'string'},
        {fieldName: 'accesses', label: 'Доступные страницы', inputType: 'select', type: 'select', options: routeOptions},
        {fieldName: 'isAdmin', label: 'Администратор', inputType: 'text', type: 'boolean'}
    ]
    const {open, onClose} = props

    const {loadUsers} = useContext(UsersTableContext)

    const [formData, setFormData] = useState({name: '', login: '', password: '', accesses: [], isAdmin: false})
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const changeField = ({target}) => {
        const {name, value, type} = target

        if (type === 'checkbox')
            formData[name] = target.checked
        else
            formData[name] = value

        setFormData({...formData})
    }

    const validateForm = () => {
        const {name, login, password} = formData

        if (name.length < 3)
            return false

        if (login.length < 3)
            return false

        if (password.length < 6)
            return false

        return true
    }

    const createUser = async () => {
        if (!validateForm())
            return false

        setSuccess(false)
        setError(false)
        setLoading(true)

        setTimeout(async () => {
            const response = await UserApi.create(formData)

            if (!response.success)
                setError(response.message)
            else
                setSuccess(true)

            loadUsers()
            setLoading(false)
        }, 500)
    }

    return (
        <>
            <Modal
                onClose={onClose}
                open={open}>
                <Fade
                    in={open}>
                    <Box
                        sx={modalBoxStyle}>
                        <Stack spacing={2}>
                            {
                                formFields.map(({fieldName, label, inputType, type, options}) => {
                                    switch (type) {

                                        case 'string': {
                                            return (
                                                <TextField
                                                    key={fieldName}
                                                    name={fieldName}
                                                    type={inputType}
                                                    value={formData[fieldName]}
                                                    onChange={changeField}
                                                    label={label}/>
                                            )
                                        }
                                        case 'boolean': {
                                            return (
                                                <FormControlLabel
                                                    key={fieldName}
                                                    control={
                                                        <Checkbox
                                                            name={fieldName}
                                                            // type={type}
                                                            onChange={changeField}
                                                            checked={formData[fieldName]}/>
                                                    }
                                                    label={label}
                                                />
                                            )
                                        }
                                        case 'select': {
                                            return (
                                                <FormControl
                                                    sx={{maxWidth: 290}}
                                                    key={fieldName}>
                                                    <InputLabel>{label}</InputLabel>
                                                    <Select
                                                        type={inputType}
                                                        name={fieldName}
                                                        onChange={changeField}
                                                        value={formData[fieldName]}
                                                        multiple>
                                                        {
                                                            options.map(({label, value}) => (
                                                                <MenuItem
                                                                    key={value}
                                                                    value={value}>
                                                                    {label}
                                                                </MenuItem>
                                                            ))
                                                        }
                                                    </Select>
                                                </FormControl>
                                            )
                                        }
                                    }
                                })
                            }

                            {
                                error
                                &&
                                <Alert severity="error">{error}</Alert>
                            }

                            {
                                success
                                &&
                                <Alert severity="success">Пользователь успешно создан!</Alert>
                            }

                            <Button variant="contained" disabled={!validateForm()} onClick={createUser}>Создать</Button>
                        </Stack>
                    </Box>
                </Fade>
            </Modal>
            <Backdrop
                sx={{color: '#fff', zIndex: 100000}}
                open={loading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </>
    )
}

export default CreateUser
