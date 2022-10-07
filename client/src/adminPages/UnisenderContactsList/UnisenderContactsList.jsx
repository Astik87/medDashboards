import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {
    Alert,
    Button,
    IconButton,
    List,
    ListItem,
    TablePagination
} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import AddButton from "@components/General/AddButton";

import './style.css'

import UnisenderApi from "@api/UnisenderApi"
import {Loading} from "@components/General";

const UnisenderContactsList = () => {

    const [contactLists, setContactLists] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(25)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    const getContactLists = async () => {
        setLoading(true)
        const response = await UnisenderApi.getLists()

        if(!response.success) {
            setError(response.message)
        } else {
            const sortedList = response.data.sort((a,b) => b.id-a.id)
            setContactLists(sortedList)
        }

        setLoading(false)
    }

    const restart = async () => {
        setError(false)
        await getContactLists()
    }

    useEffect(() => {
        getContactLists()
    }, [])

    const changePage = (event, newPage) => {
        setPage(newPage+1)
    }

    const changeLimit = ({target}) => {
        setPage(1)
        setLimit(target.value)
    }

    const deleteList = async (listId) => {
        setLoading(true)
        const response = await UnisenderApi.deleteList(listId)

        if(!response.success)
            return setError(response.message)

        getContactLists()
    }

    if(error)
        return (
            <div className="page error">
                <Alert severity="error">{error}</Alert>
                <Button onClick={restart}>Перезагрузить</Button>
            </div>
        )

    if(loading && !contactLists.length)
        return <div className="page"><Loading /></div>

    const contactListsItems = []

    for(let i = (page-1)*limit; i < page*limit; i++) {
        if(!contactLists[i])
            break

        const {id, title} = contactLists[i]
        contactListsItems.push(
            <ListItem key={id} className="contacts-list__item">
                {title}
                <IconButton onClick={() => deleteList(id)} disabled={loading} aria-label="delete" size="large">
                    <DeleteIcon sx={{color: '#d32f2f'}} />
                </IconButton>
            </ListItem>
        )
    }

    return (
        <div className="page">
            <div className="unisender-export__top">
                <Link to="/admin/unisender/create-list">
                    <AddButton>Создать новый список</AddButton>
                </Link>
            </div>
            <List className="contacts-list">
                {contactListsItems}
            </List>
            <TablePagination
                component="div"
                count={contactLists.length}
                page={page-1}
                onPageChange={changePage}
                rowsPerPage={limit}
                onRowsPerPageChange={changeLimit}
            />
        </div>
    )
}

export default UnisenderContactsList