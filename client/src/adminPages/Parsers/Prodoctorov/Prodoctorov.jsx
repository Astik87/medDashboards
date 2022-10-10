import {useEffect, useState} from "react"
import {Alert} from '@mui/material'
//
import ProdoctorovParserApi from "@api/ProdoctorovParserApi"
import ParserPage from "@/adminPages/Parsers/ParserPage"
import ParserProgress from "@/adminPages/Parsers/ParserProgress"
import {Loading} from "@components/General"
import WSClient from "@/webSocket/WebSocketClient";

const statusCodes = {
    START: 'startParser',
    NEXT_CITY: 'nextCity',
    PROGRESS: 'parserProgress',
    UPLOAD: 'uploadInDb',
    END: 'endParser',
    ERROR: 'error',
    TOR_NEW_SESSION: 'torNewSession'
}

const startWatchingParserStatus = (changeStatus, setError) => {
    WSClient.addOnMessage('ProdoctorovParser', 'progress', changeStatus)
    WSClient.addOnClose(() => {
        setError('Соединение с сервером разорвано')
    })
    WSClient.send('ProdoctorovParser', 'addUserInWatchingList')
}

const Prodoctorov = ({selectParser}) => {

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(25)
    const [data, setData] = useState(false)
    const [started, setStarted] = useState(false)
    const [parserProgress, setParserProgress] = useState(0)
    const [torStatus, setTorStatus] = useState(false)
    const [parserHasError, setParserHasError] = useState(false)
    const [isEnd, setIsEnd] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const getData = async (limit, page) => {
        if (started)
            return false
        setLoading(true)
        const response = await ProdoctorovParserApi.getData(limit, page)
        if (!response.success)
            setError(response.message)
        else
            setData(response.data)
        setPage(page)
        setLimit(limit)
        setLoading(false)
    }

    const getParserStatus = () => {
        WSClient.addOnMessage('ProdoctorovParser', 'getParserStatus', ({status}) => {
            setStarted(status)
            if(status)
                startWatchingParserStatus(changeStatus, setError)
        })
        WSClient.send('ProdoctorovParser', 'getParserStatus')
    }

    const changeStatus = ({status, message}) => {
        switch (status) {
            case statusCodes.PROGRESS:
                setParserProgress(message)
                break
            case statusCodes.UPLOAD:
                setParserProgress(message)
                break
            case statusCodes.END:
                endParser()
                break
            case statusCodes.ERROR:
                setParserProgress(message)
                setParserHasError(true)
                break
            case statusCodes.TOR_NEW_SESSION:
                setTorStatus(message)
                break
        }
    }

    const endWatchingParserStatus = () => {
        WSClient.send('ProdoctorovParser', 'removeUserInWatchingList')
    }

    const changePage = (newPage) => {
        getData(limit, newPage + 1)
    }

    const changeLimit = (newLimit) => {
        getData(newLimit, 1)
    }

    const endParser = () => {
        setIsEnd(true)
        setTimeout(() => {
            setStarted(false)
        }, 800)
    }

    const startParser = () => {
        if (!WSClient.isOpen)
            return setError('Соединение с сервером разорвано. Пожалуйста попробуйте перезагрузить страницу')
        setStarted(true)
        startWatchingParserStatus(changeStatus, setError)
        WSClient.send('ProdoctorovParser', 'startParser')
    }

    const upload = () => {
        if (!WSClient.isOpen)
            return setError('Соединение с сервером разорвано. Пожалуйста попробуйте перезагрузить страницу')
        setStarted(true)
        startWatchingParserStatus(changeStatus, setError)
        WSClient.send('ProdoctorovParser', 'upload')
    }

    useEffect(() => {
        getParserStatus()
        getData(limit, page)

        return endWatchingParserStatus
    }, [])

    if (error)
        return (
            <div className="page">
                <div className="page__content">
                    <Alert severity="error">{error}</Alert>
                </div>
            </div>
        )

    if (loading)
        return <Loading/>

    let severity = 'info'

    if (isEnd)
        severity = 'success'

    if (parserHasError)
        severity = 'error'

    return (
        <div>
            {
                started
                    ?
                    <ParserProgress>
                        {
                            torStatus
                            &&
                            <Alert className="parser-progress__status" severity="info">
                                {torStatus}
                            </Alert>
                        }
                        {
                            parserProgress
                            &&
                            <Alert className="parser-progress__status" severity={severity}>
                                {parserProgress.split(/->|;/g).map((text, index) => <div key={index}>{text}</div>)}
                            </Alert>
                        }
                    </ParserProgress>
                    :
                    <ParserPage
                        name="DocDoc"
                        back={() => selectParser(false)}
                        upload={upload}
                        start={startParser}
                        parserData={data}
                        page={page}
                        limit={limit}
                        changePage={changePage}
                        changeLimit={changeLimit}/>
            }
        </div>
    )
}

export default Prodoctorov