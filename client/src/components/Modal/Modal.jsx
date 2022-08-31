import React from "react";

import './style.css'

const Modal = (props) => {
    const {children, close} = props

    return (
        <div className="modal-wrapper">
            <div className="modal-content">
                <div className="modal-close" onClick={close}> </div>
                {children}
            </div>
        </div>
    )
}

export default Modal
