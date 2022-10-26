import Filter from "@components/Layout/PageTop/Filter"
import {useEffect, useState} from "react"
import {Button, LinearProgress} from "@mui/material"
import {DataGrid} from "@mui/x-data-grid"
import Error from "@components/General/Error"

import './style.css'
import UserApi from "@api/UserApi"
import ExportNMO from "@/adminPages/MedTouchUsers/ExportNMO";

const now = new Date()

const initFilter = {
    year: now.getFullYear(),
    month: false,
    day: false,
    eventId: false,
    directionId: false,
    userGroup: false
}

const columns = [
    {field: 'id', headerName: 'ID пользователя', width: 100},
    {field: 'email', headerName: 'Email', width: 450},
    {field: 'name', headerName: 'Имя', width: 250},
    {field: 'nmoCode', headerName: 'Код НМО', width: 250},
    {field: 'directionName', headerName: 'Направление', width: 450},
]

const MedTouchUsers = () => {

    const getUsers = async (filter, limit, page, sort) => {
        setLoading(true)
        const response = await UserApi.getMedUsers(filter, limit, page, sort)

        if(!response.success)
            setError(response.message)
        else
            setUsers(response.data)

        setLoading(false)
        setLimit(limit)
        setPage(page)
    }

    const [filter, setFilter] = useState(initFilter)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(25)
    const [sort, setSort] = useState({field: 'id', sort: 'asc'})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [users, setUsers] = useState(false)

    const changeFilter = (newFilter) => {
        setFilter(newFilter)
    }

    const sortUsers = newSort => {
        if (loading)
            return

        setSort(newSort[0])
    }

    useEffect(() => {
        getUsers(filter, limit, page, sort)
    }, [filter, limit, page, sort])

    if(error)
        return (
            <div className="page">
                <Error text={error} />
            </div>
        )

    return (
        <div className="page">
            <ExportNMO />
            <div className="medtouch-users__top">
                <Filter
                    filtersList={['date', 'events', 'directions', 'userGroup']}
                    filterProps={{events: {isMulti: true}, userGroup: {isMulti: true}}}
                    filter={filter}
                    change={changeFilter}/>
                <Button variant="contained">Export NMO</Button>
            </div>
            <div className="page__content">
                <div className="medtouch-users-data">
                    <DataGrid
                        sortingMode="server"
                        onSortModelChange={sortUsers}
                        columns={columns}
                        rows={users ? users.rows : []}
                        loading={loading}
                        pagination
                        paginationMode="server"
                        page={page - 1}
                        pageSize={limit}
                        rowCount={users ? users.count : 0}
                        onPageChange={(newPage) => !loading && setPage(newPage+1)}
                        onPageSizeChange={newLimit => {!loading && (setPage(1) || setLimit(newLimit))}}
                        components={{
                            LoadingOverlay: LinearProgress,
                        }}/>
                </div>
            </div>
        </div>
    )
}

export default MedTouchUsers