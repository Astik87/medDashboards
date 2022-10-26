import {
    Modal,
    Fade,
    Box,
    Button,
    Stack,
    LinearProgress, Alert,
} from '@mui/material'
import AnimatedNumbers from 'react-animated-number'

import './style.css'

import {modalBoxStyle} from "@styles/Modal";
import {useEffect, useState} from "react";
import readXlsxFile from "read-excel-file";
import Error from "@components/General/Error";
import UserApi from "@api/UserApi";
import {delay} from "@utils/Time";

const limit = 250
const timeout = 1500

const ExportNMO = ({isOpen, close}) => {

    const [file, setFile] = useState(false)
    const [loadFile, setLoadFile] = useState(false)
    const [started, setStarted] = useState(false)
    const [progress, setProgress] = useState(0)
    const [users, setUsers] = useState([])
    const [error, setError] = useState(false)
    const [uploadErrors, setUploadErrors] = useState([])

    const changeFile = ({target}) => {
        setFile(target.files[0])
    }

    const selectFile = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.xlsx'

        input.onchange = changeFile

        input.click()
    }

    const exportUsers = async (usersList) => {
        const response = await UserApi.exportNMO(usersList)

        if (!response.success) {
            setError(response.message)
            return false
        }

        if (response.data.errors.length)
            setUploadErrors([...uploadErrors, ...response.data.errors])

        return true
    }

    const startUploadUsers = async () => {
        if (!users.length)
            return false

        await delay(timeout)

        let uploadUsers = []
        let currProgress = 0

        for (let user of users) {
            const count = uploadUsers.push(user)

            if (count >= limit) {
                const uploadResult = await exportUsers(uploadUsers)
                currProgress += uploadUsers.length
                uploadUsers = []
                if (!uploadResult)
                    return false

                setProgress(currProgress)
                await delay(timeout / 2)
            }
        }

        if (uploadUsers.length) {
            await exportUsers(uploadUsers)
            currProgress += uploadUsers.length
            setProgress(currProgress)
        }

    }

    const start = async () => {
        setStarted(true)
        setLoadFile(true)

        const schema = {
            'Email': {
                prop: 'email',
                type: String
            },
            'НМО': {
                prop: 'nmo',
                type: String
            }
        }

        const xlsxContent = await readXlsxFile(file, {schema})
        console.log(xlsxContent.rows)
        setUsers(xlsxContent.rows)
        setLoadFile(false)
    }

    const restart = () => {
        setProgress(0)
        setStarted(false)
        setUsers([])
        setFile(false)
        setLoadFile(false)
        setUploadErrors([])
        setError(false)
    }

    useEffect(() => {
        startUploadUsers()
    }, [users])

    console.log('progress:', progress)
    return (
        <div className="export-nmo">
            <Modal
                onClose={() => !started && close()}
                open={isOpen}>
                <Fade
                    in={isOpen}>
                    <Box sx={modalBoxStyle}>
                        <div className="export-nmo__content">
                            {
                                error
                                &&
                                <Stack spacing={2}>
                                    <Error style={{width: '100%'}} text={error}/>
                                    <Button onClick={restart}>Повторить попытку</Button>
                                </Stack>
                            }
                            {
                                !error &&
                                (
                                    !started
                                        ?
                                        <Stack spacing={2}>
                                            <Button variant="contained" onClick={selectFile}>
                                                {
                                                    file
                                                        ? file.name
                                                        : 'Выберите файл'
                                                }
                                            </Button>
                                            <Button variant="contained" onClick={start}
                                                    disabled={file === false}>Export</Button>
                                        </Stack>
                                        :
                                        <Stack spacing={2}>
                                            <div className="export-nmo__status-text">
                                                {loadFile && 'Загружаем файл'}
                                                {
                                                    progress !== false &&
                                                    <div>
                                                        <AnimatedNumbers
                                                            value={progress}
                                                            stepPrecision={0}
                                                            default={0}
                                                            duration={timeout}
                                                        />
                                                        /
                                                        {users.length}
                                                    </div>
                                                }
                                            </div>
                                            <LinearProgress
                                                sx={{
                                                    "& .MuiLinearProgress-bar": {
                                                        transition: `transform ${timeout}ms linear`
                                                    }
                                                }}
                                                variant="determinate"
                                                value={users.length ? Math.round(progress / users.length * 100) : 0}
                                            />

                                            <div className="export-nmo__user-errors">
                                                <Stack spacing={1}>
                                                    {
                                                        uploadErrors.map((userError, index) => (
                                                            <Alert severity="error" key={index}>{userError}</Alert>
                                                        ))
                                                    }
                                                </Stack>
                                            </div>
                                            <Button
                                                onClick={() => close() || restart()}
                                                variant="contained"
                                                disabled={progress !== users.length}>
                                                Завершить
                                            </Button>
                                        </Stack>
                                )
                            }
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default ExportNMO