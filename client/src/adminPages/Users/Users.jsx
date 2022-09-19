import {createContext, useState} from "react";
import {Alert, Backdrop, Button, CircularProgress} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import './style.css'

import UsersTable from "./UsersTable";
import CreateUser from "./CreateUser"
import UserApi from "@api/UserApi";

export const UsersTableContext = createContext(null)

const Users = () => {

    const [users, setUsers] = useState(false)
    const [selectedUsers, setSelectedUsers] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [createModalOpen, setCreateModalOpen] = useState(false)

    const deleteUsers = async () => {
        setLoading(true)
        const response = await UserApi.delete(selectedUsers)

        if(!response.success)
            setError(response.message)
        else
            setSelectedUsers([])

        loadUsers()
        setLoading(false)
    }

    const loadUsers = async (limit = 25, page = 1) => {
        const response = await UserApi.get(limit, page)
        if(!response.success)
            setError(response.message)
        else
            setUsers(response.data)
    }

    const reload = () => {
        setUsers(false)
        setSelectedUsers([])
        setLoading(false)
        setCreateModalOpen(false)
        setError(false)
    }

    if(error)
        return (
            <div className="users-table__error">
                <Alert severity="error">{error}</Alert>
                <Button onClick={reload}>Перезагрузить</Button>
            </div>
        )

    return (
        <UsersTableContext.Provider
            value={{
                users,
                loadUsers,
                selectedUsers,
                setSelectedUsers
            }}>
            <div className="page">
                <Backdrop
                    sx={{color: '#fff', zIndex: 100000}}
                    open={loading}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
                <div className="admin-page__top">
                    <Button
                        onClick={() => setCreateModalOpen(true)}
                        variant="contained">
                        Create
                    </Button>
                    <Button variant="outlined" onClick={deleteUsers} disabled={!selectedUsers.length}
                            startIcon={<DeleteIcon/>}>Delete</Button>
                </div>
                <CreateUser open={createModalOpen} onClose={() => setCreateModalOpen(false)} />
                <UsersTable users={users} />
            </div>
        </UsersTableContext.Provider>
    )
}

export default Users
