import {CircularProgress, Alert, Stack} from '@mui/material'

import './style.css'

const ParserProgress = ({children}) => {
    return (
        <div className="page">
            <div className="parser-progress">
                <CircularProgress/>
                {children}
            </div>
        </div>
    )
}

export default ParserProgress