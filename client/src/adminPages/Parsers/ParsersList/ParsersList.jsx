import {Card, CardActionArea, Grid} from "@mui/material";

import './style.css'

const ParsersList = ({items, selectParser}) => {
    return (
        <Grid container spacing={2}>
            {
                items.map(({preview}, index) => {
                    return (
                        <Grid key={index} item xs={3}>
                            <Card>
                                <CardActionArea onClick={() => selectParser(index)}>
                                    <div className="parser-item">
                                        <div className="parser-item__img">
                                            <img src={preview} alt=""/>
                                        </div>
                                    </div>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default ParsersList