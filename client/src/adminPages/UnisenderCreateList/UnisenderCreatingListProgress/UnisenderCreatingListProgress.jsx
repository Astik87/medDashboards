import {useContext, useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import {
    CircularProgress,
    Box,
    Typography,
    Stack,
    Alert,
    List,
    ListItem,
    Button
} from '@mui/material'

import './style.css'

import UnisenderCreateListContext from "../UnisenderCreateListCondext";
import UnisenderApi from "@api/UnisenderApi";

function CircularProgressWithLabel(props) {
    return (
        <Box className="progress-wrapper">
            <CircularProgress size={70} variant="determinate" {...props} />
            <Box className="progress-content">
                <Typography variant="caption" component="div" color="text.secondary">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

const limit = 500

const UnisenderCreatingListProgress = () => {
    const {listName, usersFilter} = useContext(UnisenderCreateListContext)

    const [progress, setProgress] = useState(0)
    const [newListId, setNewListId] = useState(false)
    const [importedUsersPage, setImportedUsersPage] = useState(0)
    const [importTotalStatus, setImportTotalStatus] = useState({
        total: 0,
        inserted: 0,
        updated: 0,
        deleted: 0,
        new_emails: 0,
        invalid: 0,
        log: []
    })
    const [importSuccess, setImportSuccess] = useState(false)
    const [error, setError] = useState(false)

    const createList = async () => {
        const response = await UnisenderApi.createList(listName)

        if (!response.success)
            return setError(response.message)

        setNewListId(response.data.id)
        setProgress(10)
    }

    const importUsers = async () => {

        if (!newListId)
            return false

        const apiFilter = {}
        if (usersFilter.eventId)
            apiFilter.eventId = usersFilter.eventId

        if (usersFilter.directionId)
            apiFilter.directionId = usersFilter.directionId

        const response = await UnisenderApi.importContacts(apiFilter, limit, importedUsersPage + 1, newListId)

        if (!response.success)
            return setError(response.message)

        setProgress((importedUsersPage * limit + response.data.total) / response.data.usersCount * 90 + 10)

        importTotalStatus.total += response.data.total
        importTotalStatus.inserted += response.data.inserted
        importTotalStatus.updated += response.data.updated
        importTotalStatus.deleted += response.data.deleted
        importTotalStatus.new_emails += response.data.new_emails
        importTotalStatus.invalid += response.data.invalid
        importTotalStatus.log = [...importTotalStatus.log, ...response.data.log]

        setImportTotalStatus({...importTotalStatus})

        if ((importedUsersPage + 1) * limit >= response.data.usersCount)
            return setImportSuccess(true)

        setTimeout(() => {
            setImportedUsersPage(importedUsersPage + 1)
        }, 100)
    }

    useEffect(() => {
        if (!newListId)
            createList()
    }, [])

    useEffect(() => {
        if (newListId)
            importUsers()
    }, [importedUsersPage, newListId])

    return (
        <div className="page">
            <div className="create-list-progress">
                <div className="create-list__status">
                    <CircularProgressWithLabel value={progress}/>
                    <Stack
                        className="total-status"
                        spacing={2}>
                        {
                            error
                            &&
                            <Alert severity="error">
                                Критическая ошибка: {error}<br/>
                                Выгрузка остановлена
                            </Alert>
                        }

                        {
                            importSuccess
                            &&
                            <>
                                <Alert severity="success">Все контакты успешно выгружены </Alert>
                                <Button variant="outlined">
                                    <Link to="/admin/unisender">
                                        Вернуться в список контактов
                                    </Link>
                                </Button>
                            </>
                        }

                        <Alert severity="info">Общее кол-во: {importTotalStatus.total}</Alert>
                        <Alert severity="info">Добавлено: {importTotalStatus.inserted}</Alert>
                        <Alert severity="info">Обновлено: {importTotalStatus.updated}</Alert>
                        <Alert severity="info">Новые контакты: {importTotalStatus.new_emails}</Alert>
                        <Alert severity="error">Невалидные данные: {importTotalStatus.invalid}</Alert>
                        <List
                            className="log-list">
                            {
                                importTotalStatus.log.map(({code, message}, index) => {
                                    return (
                                        <ListItem
                                            key={index}>
                                            Code: {code}; Message: {message}
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default UnisenderCreatingListProgress