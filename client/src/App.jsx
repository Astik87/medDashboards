import React, {useEffect, useState} from "react"
import {BrowserRouter} from "react-router-dom";
import {SnackbarProvider} from "notistack";

import AppRouter from "@components/AppRouter";
import Header from "@components/Layout/Header";
import Sidebar from "@components/Layout/Sidebar";

import userState from "@/state/UserState";
import FilterState from "@/state/FilterState";

import WebSocket from '@components/WebSocket'

import './App.css';
import './fonts/stylesheet.css'
import {Context} from "@/index";
import UserApi from "@api/UserApi";
import {Loading} from "@components/General";

function App() {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        UserApi.check().then(response => {
            const {data, success} = response
            if (!success) {
                userState.setUser(false)
                return
            }

            userState.setUser(data)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading)
        return <Loading/>

    return (
        <BrowserRouter>
            <div className="app">
                <Context.Provider value={{
                    userState: userState,
                    filter: new FilterState(),
                }}>
                    <SnackbarProvider>
                        <WebSocket/>
                        <Header/>
                        <div className="content-wrapper">
                            <Sidebar/>
                            <div className="content">
                                <div className="export-page-container">
                                    <AppRouter/>
                                </div>
                            </div>
                        </div>
                    </SnackbarProvider>
                </Context.Provider>
            </div>
        </BrowserRouter>
    );
}

export default App;
