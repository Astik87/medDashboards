import Filter from "@components/Layout/PageTop/Filter"
import {useEffect, useState} from "react"
import {Button, LinearProgress} from "@mui/material"
import {DataGrid} from "@mui/x-data-grid"
import Error from "@components/General/Error"

import './style.css'
import UserApi from "@api/UserApi"
import ImportNMO from "@/adminPages/NMOCodes/ImportNMO";
import ConfirmDeleteNmoCodes from "@/adminPages/NMOCodes/ConfirmDeleteNmoCodes";

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
    {field: 'code', headerName: 'Код НМО', width: 250},
    {field: 'directionName', headerName: 'Направление', width: 450},
    {field: 'eventId', headerName: 'ID мероприятия', width: 450},
]

const NMOCodes = () => {

    const getNmoCodes = async (filter, limit, page, sort) => {
        setLoading(true)
        const response = await UserApi.getNmoCodes(filter, limit, page, sort)

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
    const [importNMOOpened, setImportNMOOpened] = useState(false)
    const [checkedCodes, setCheckedCodes] = useState([])
    const [showConfirmDeleteCodes, setShowConfirmDeleteCodes] = useState(false)

    const changeFilter = (newFilter) => {
        setFilter(newFilter)
    }

    const sortUsers = newSort => {
        if (loading)
            return

        setSort(newSort[0])
    }

    const confirmDeleteNmoCodes = (isConfirm) => {
        if(isConfirm)
            deleteNmoCodes()
        else
            setCheckedCodes([])

        setShowConfirmDeleteCodes(false)
    }

    const deleteNmoCodes = async () => {
        const response = await UserApi.deleteNmoCodes(checkedCodes)
        setCheckedCodes([])
        if(response.success)
            return getNmoCodes(filter, limit, 1, sort)

        setError(response.message)
    }

    useEffect(() => {
        getNmoCodes(filter, limit, page, sort)
    }, [filter, limit, page, sort])

    if(error)
        return (
            <div className="page">
                <Error text={error} />
            </div>
        )

    return (
        <div className="page">
            <ImportNMO isOpen={importNMOOpened} close={() => setImportNMOOpened(false)} />
            <ConfirmDeleteNmoCodes
                open={showConfirmDeleteCodes}
                selectedCodeIds={checkedCodes}
                onClose={() => setShowConfirmDeleteCodes(false)}
                callback={confirmDeleteNmoCodes} />
            <div className="medtouch-users__top">
                <Filter
                    filtersList={['date', 'events', 'directions', 'userGroup']}
                    filterProps={{events: {isMulti: true}, userGroup: {isMulti: true}}}
                    filter={filter}
                    change={changeFilter}/>
                <div className="nmo-codes__btns">
                    <Button
                        variant="contained"
                        onClick={() => setImportNMOOpened(true)}
                    >
                        Import NMO
                    </Button>
                    <Button
                        variant="contained"
                        disabled={!checkedCodes.length}
                        onClick={() => setShowConfirmDeleteCodes(true)}
                    >
                        Delete NMO
                    </Button>
                </div>
            </div>
            <div className="page__content">
                <div className="medtouch-users-data">
                    <DataGrid
                        checkboxSelection
                        keepNonExistentRowsSelected
                        selectionModel={checkedCodes}
                        onSelectionModelChange={setCheckedCodes}
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

export default NMOCodes
