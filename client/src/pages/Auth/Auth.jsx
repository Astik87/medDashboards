import React, {useContext, useEffect, useState} from "react";
import {Button, Stack, TextField, Alert, Backdrop, CircularProgress, styled} from '@mui/material'

import './style.css'

import {sendBtnStyle} from '@styles/Button'
import UserApi from "@api/UserApi";
import {Context} from "@/index";

const SendButton = styled(Button)(sendBtnStyle)

const Auth = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const validate = () => {
        return login.length && password.length >= 6
    }

    const {user} = useContext(Context)

    const auth = async () => {
        if(!isValid)
            return false

        setLoading(true)
        const response = await UserApi.login(login, password)

        if(!response.success) {
            setError(response.message)
        } else {
            setSuccess(true)
            setError(false)
            setTimeout(() => {
                user.setIsAuth(true)
                user.setUser(response.data)
            }, 500)
        }
        setLoading(false)
    }

    useEffect(() => {
        setIsValid(validate())
    }, [login, password])

    return (
        <div className="page">
            <div className="auth-page">
                <Stack className="auth-form" spacing={2}>
                    <TextField label="Login" value={login} error={!login} onChange={({target}) => setLogin(target.value)} />
                    <TextField type="password" label="Password" error={password.length < 6} onChange={({target}) => setPassword(target.value)} />
                    {
                        error
                        &&
                        <Alert severity="error">{error}</Alert>
                    }
                    {
                        success
                        &&
                        <Alert severity="success">Вы авторизованы</Alert>
                    }
                    <SendButton onClick={auth} disabled={!isValid || loading} variant="contained">Войти</SendButton>
                    <Backdrop
                        sx={{ color: '#fff', zIndex: 1000, top: -20}}
                        open={loading}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </Stack>
            </div>
        </div>
    )
}

export default Auth
