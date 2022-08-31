import './style.css'

import Button from "@components/Button";

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
