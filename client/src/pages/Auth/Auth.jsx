import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import {Button, Stack, TextField, Alert, Backdrop, CircularProgress, styled} from '@mui/material'

import './style.css'

import {sendBtnStyle} from '@styles/Button'
import UserApi from "@api/UserApi";
import {Context} from "@/index";
import userState from "@/state/UserState"
import {observer} from "mobx-react";

const SendButton = styled(Button)(sendBtnStyle)

const Auth = observer(() => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const validate = () => {
        return login.length && password.length >= 6
    }

    const auth = async () => {
        if (!isValid)
            return false

        setLoading(true)
        const response = await UserApi.login(login, password)

        if (!response.success) {
            setError(response.message)
        } else {
            setSuccess(true)
            setError(false)
            setTimeout(() => {
                userState.setIsAuth(true)
                userState.setUser(response.data)
            }, 500)
        }
        setLoading(false)
    }

    const logout = async () => {
        await UserApi.logout()
        userState.setUser(false)
        userState.setIsAuth(false)
    }

    useEffect(() => {
        setIsValid(validate())
    }, [login, password])

    return (
        <div className="page">
            <div className="auth-page">
                {
                    !userState.isAuth
                        ?
                        <Stack className="auth-form" spacing={2}>
                            <TextField label="Login" value={login} error={!login}
                                       onChange={({target}) => setLogin(target.value)}/>
                            <TextField type="password" label="Password" error={password.length < 6}
                                       onChange={({target}) => setPassword(target.value)}/>
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
                            <SendButton onClick={auth} disabled={!isValid || loading}
                                        variant="contained">Войти</SendButton>
                            <Backdrop
                                sx={{color: '#fff', zIndex: 1000, top: -20}}
                                open={loading}
                            >
                                <CircularProgress color="inherit"/>
                            </Backdrop>
                        </Stack>
                        :
                        <Stack spacing={2}>
                            <Alert severity="success">Вы уже авторизованы</Alert>
                            <SendButton onClick={logout}
                                        variant="contained">Выйти</SendButton>
                            <Link to="/" style={{display: 'block'}}>
                                <SendButton style={{width: '100%'}}
                                            variant="contained">
                                    Главная
                                </SendButton>
                            </Link>
                        </Stack>
                }
            </div>
        </div>
    )
})

export default Auth
