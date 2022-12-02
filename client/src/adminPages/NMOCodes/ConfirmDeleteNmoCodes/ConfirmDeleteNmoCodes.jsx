import React from 'react'
import {
    Modal,
    Fade,
    Box,
    Button
} from '@mui/material'
import {modalBoxStyle} from "@styles/Modal"

import './style.css'

const ConfirmDeleteNmoCodes = ({open, selectedCodeIds, onClose, callback}) => {
    if (!onClose || typeof onClose !== 'function')
        onClose = () => {}

    if(!callback || typeof callback !== 'function')
        callback = () => {}

    return (
        <Modal open={open} onClose={onClose}>
            <Fade
                in={open}>
                <Box
                    sx={modalBoxStyle}>
                    <div className="modal-confirm">
                        <div className="modal-confirm__title">Удалить коды НМО с id:</div>
                        <div className="modal-confirm__content">
                            {selectedCodeIds.join(', ')}
                        </div>
                        <Button className="modal-confirm__btn" onClick={() => callback(true)} variant="contained" color="error">Удалить</Button>
                        <Button className="modal-confirm__btn" onClick={() => callback(false)} variant="contained">Отмена</Button>
                    </div>
                </Box>
            </Fade>
        </Modal>
    )
}

export default ConfirmDeleteNmoCodes