import {LinearProgress} from "@mui/material";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {Empty} from "@components/General";

const columns = [
    {field: 'lastUpdate', width: 150},
    {field: 'email', width: 250},
    {field: 'utmSource', width: 150},
    {field: 'isDelivered', width: 150},
    {field: 'isRead', width: 150},
    {field: 'isVisitedLink', width: 150},
    {field: 'isRegistered', width: 150},
    {field: 'isViewing', width: 150},
]

const valueLabels = ['Нет', 'Да']

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
