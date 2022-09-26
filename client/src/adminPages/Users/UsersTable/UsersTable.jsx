import {useContext, useEffect, useState} from "react";
import {
    DataGrid, GridToolbar
} from '@mui/x-data-grid'

import './style.css'

import {UsersTableContext} from "@/adminPages/Users/Users";
import {Alert, Button, LinearProgress} from "@mui/material";

const columns = [
    {field: 'id', width: 50},
    {field: 'name', width: 200},
    {field: 'login', width: 200},
    {field: 'isAdmin', width: 200},
]

const UsersTable = (props) => {

    const {users} = props

    const {loadUsers, selectedUsers, setSelectedUsers} = useContext(UsersTableContext)

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [limit, setLimit] = useState(25)
    const [page, setPage] = useState(1)

    const getUsers = async (limit = 25, page = 1) => {
        setLoading(true)
        setLimit(limit)
        setPage(page)
        await loadUsers(limit, page)
        setLoading(false)
    }

    useEffect(() => {
        getUsers()
    }, [])

    const changePage = (newPage) => {
        getUsers(limit, newPage+1)
    }

    const changeLimit = (newLimit) => {
        getUsers(newLimit, 1)
    }

    if (error)
        return (
            <div className="users-table__error">
                <Alert severity="error">{error}</Alert>
                <Button onClick={getUsers}>Повторить попытку</Button>
            </div>
        )

    return (
        <div className="users-table">
            <DataGrid
                columns={columns}
                rows={users.rows || []}
                loading={loading}
                pagination
                paginationMode="server"
                page={page-1}
                pageSize={limit}
                rowCount={users.count || 0}
                onPageChange={changePage}
                onPageSizeChange={changeLimit}
                checkboxSelection
                selectionModel={selectedUsers}
                onSelectionModelChange={(newSelectedUsers) => {
                    setSelectedUsers(newSelectedUsers)
                }}
                components={{
                    LoadingOverlay: LinearProgress,
                    Toolbar: GridToolbar
                }}/>
        </div>
    )
}

export default UsersTable
