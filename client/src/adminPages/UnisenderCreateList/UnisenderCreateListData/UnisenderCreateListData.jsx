import {useContext, useEffect, useState} from "react";
import {
    TextField,
    Alert,
    Button,
    LinearProgress
} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid"

import './style.css'
import Filter from "@components/Layout/PageTop/Filter";
import UserApi from "@api/UserApi";
import UnisenderCreateListContext from "../UnisenderCreateListCondext";

const filtersList = ['date', 'events', 'directions', 'userGroup']
const nowYear = (new Date()).getFullYear()

const columns = [
    {field: 'id', headerName: 'ID пользователя', width: 100},
    {field: 'email', headerName: 'Email', width: 450},
    {field: 'name', headerName: 'Имя', width: 250},
    {field: 'directionName', headerName: 'Направление', width: 450},
]

const initFilter = {
    year: nowYear,
    month: false,
    day: false,
    eventId: false,
    directionId: false,
    userGroup: false
}

const UnisenderCreateListData = () => {

    const [filter, setFilter] = useState(initFilter)
    const [name, setName] = useState('')
    const [users, setUsers] = useState({count: 0, rows: []})
    const [limit, setLimit] = useState(25)
    const [page, setPage] = useState(1)
    const [sort, setSort] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const {setListName, setUsersFilter} = useContext(UnisenderCreateListContext)

    const getUsers = async (filter, limit, page, sort = false) => {
        setLoading(true)
        const {eventId, directionId, userGroup} = filter
        const response = await UserApi.getMedUsers({eventId, directionId, userGroup}, limit, page, sort)

        if (!response.success)
            setError(response.message)
        else
            setUsers(response.data)

        setLimit(limit)
        setPage(page)
        setLoading(false)
    }

    const restart = () => {
        setError(false)
        setFilter(initFilter)
        setLimit(25)
        setPage(1)
        setSort(false)
    }

    const validate = () => {
        const res = {
            name: true,
            usersList: true
        }

        if (name.length < 3)
            res.name = false

        res.usersList = Boolean(users.rows.length)

        return res
    }

    const createList = () => {
        setListName(name)
        setUsersFilter(filter)
    }

    const validationRes = validate()

    useEffect(() => {
        getUsers(filter, limit, page, sort)
    }, [filter, limit, page, sort])

    if (error)
        return (
            <div className="page error">
                <Alert severity="error">{error}</Alert>
                <Button onClick={restart}>Перезагрузить</Button>
            </div>
        )

    return (
        <div className="page">
            <TextField
                className="list-name"
                label="Название"
                value={name}
                onChange={({target}) => setName(target.value)}
                error={!validationRes.name}/>
            <div className="list-users">
                <div className="list-users__title">
                    Список пользователей:
                </div>
                <Filter
                    filtersList={filtersList}
                    filterProps={{events: {isMulti: true}, userGroup: {isMulti: true}}}
                    filter={filter}
                    change={setFilter}/>
                <div className="list-grid">
                    <DataGrid
                        sortingMode="server"
                        onSortModelChange={([newSort]) => (!loading && setSort(newSort))}
                        columns={columns}
                        rows={users.rows}
                        loading={loading}
                        pagination
                        paginationMode="server"
                        page={page - 1}
                        pageSize={limit}
                        rowCount={users.count}
                        onPageChange={newPage => (!loading && setPage(newPage+1))}
                        onPageSizeChange={newLimit => (!loading && setLimit(newLimit))}
                        components={{
                            LoadingOverlay: LinearProgress,
                        }}/>
                </div>
                <div className="list-users__create-btn">
                    <Button
                        onClick={createList}
                        variant="contained"
                        disabled={!validationRes.name || !validationRes.usersList}>
                        Создать контакт
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default UnisenderCreateListData