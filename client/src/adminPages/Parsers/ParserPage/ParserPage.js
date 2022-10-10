import {Button, LinearProgress} from "@mui/material"
import {DataGrid} from "@mui/x-data-grid"

import './style.css'

const columns = [
    {field: 'id', headerName: 'Id', width: 50},
    {field: 'medUserId', headerName: 'Id MedTouch', width: 150},
    {field: 'name', headerName: 'Имя', width: 300},
    {field: 'city', headerName: 'Город', width: 300},
    {field: 'cityMed', headerName: 'Город MedTouch', width: 300},
    {field: 'direction', headerName: 'Направление', width: 300},
    {field: 'directionMed', headerName: 'Направление MedTouch', width: 300},
    {field: 'differences', headerName: 'Различие', width: 500},
]

const ParserPage = ({name, start, upload, back, parserData, page, limit, changePage, changeLimit}) => {

    return (
        <div className="page">
            <div className="parser">
                <div className="parser__top">
                    <Button onClick={back}>{'< Back'}</Button>
                    <div className="parser__top__right">
                        <Button onClick={upload} variant="contained">Загрузить в базу</Button>
                        <Button onClick={start} variant="contained">Запустить парсер</Button>
                    </div>
                </div>

                <div className="parser__data">
                    <DataGrid
                        columns={columns}
                        rows={parserData.rows || []}
                        pagination
                        paginationMode="server"
                        page={page-1}
                        pageSize={limit}
                        rowCount={parserData.count || 0}
                        onPageChange={changePage}
                        onPageSizeChange={changeLimit}
                        components={{
                            LoadingOverlay: LinearProgress,
                        }}/>
                </div>

            </div>
        </div>
    )
}

export default ParserPage