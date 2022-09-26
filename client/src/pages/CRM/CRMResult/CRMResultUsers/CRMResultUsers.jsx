import {LinearProgress} from "@mui/material";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {Empty} from "@components/General";

const columns = [
    {field: 'lastUpdate', headerName: 'Дата последнего обновления ', width: 225},
    {field: 'email', headerName: 'Email', width: 250},
    {field: 'utmSource', headerName: 'UTM Source', width: 150},
    {field: 'isDelivered', headerName: 'Доставлено', width: 100},
    {field: 'isRead', headerName: 'Прочитано', width: 100},
    {field: 'isVisitedLink', headerName: 'Перешел по ссылке', width: 150},
    {field: 'isRegistered', headerName: 'Зарегистрировался', width: 150},
    {field: 'isViewing', headerName: 'Присутствовал',width: 150},
]

const booleanFields = ['isDelivered', 'isRead', 'isVisitedLink', 'isRegistered', 'isViewing']

const CRMResultUsers = ({usersList}) => {

    if(!usersList)
        return <Empty />

    return (
        <div className="crm-users-list">
            <DataGrid
                columns={columns}
                rows={usersList.map(user => {
                    const newUser = {...user}
                    booleanFields.forEach(field => {
                        newUser[field] = user[field] ? 'Да' : 'Нет'
                    })

                    return newUser
                })}
                pagination
                components={{
                    LoadingOverlay: LinearProgress,
                    Toolbar: GridToolbar
                }}/>
        </div>
    )
}

export default CRMResultUsers
