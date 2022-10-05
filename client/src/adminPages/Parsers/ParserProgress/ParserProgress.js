import {CircularProgress, Alert, Stack} from '@mui/material'

import './style.css'

const ParserProgress = ({progress, hasError, isEnd}) => {

    let severity = 'info'

    if(isEnd)
        severity = 'success'

    if(hasError)
        severity = 'error'

    return (
        <div className="page">
            <div className="parser-progress">
                <CircularProgress/>
                <Alert className="parser-progress__status" severity={severity}>
                    {
                        progress
                        &&
                        progress.split(/->|;/g).map((text, index) => <div key={index}>{text}</div>)
                    }
                </Alert>
            </div>
        </div>
    )
}

export default ParserProgress