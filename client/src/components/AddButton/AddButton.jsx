import './style.css'

import Icon from "@mui/material/Icon"
import {Box} from "@mui/material"

import Button from "@components/Button"

const AddButton = (props) => {
    const {children, onClick, className} = props

    return (
        <Button className={`btn--add ${className}`} onClick={onClick}>
            <div className="btn--add__plus">
            </div>
            <span>
                {children}
            </span>
        </Button>
    )
}

export default AddButton
