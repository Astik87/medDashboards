import {Alert} from "@mui/material";

import './style.css'

const Error = ({text, style}) => {
    return (
        <div className="error">
            <Alert severity="error" sx={style}>{text}</Alert>
        </div>
    )
}

export default Error