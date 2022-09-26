import {useState} from "react";

import UnisenderCreateListContext from "./UnisenderCreateListCondext";
import UnisenderCreateListData from "./UnisenderCreateListData";
import UnisenderCreatingListProgress from "./UnisenderCreatingListProgress";

const UnisenderCreateList = () => {

    const [listName, setListName] = useState(false)
    const [usersFilter, setUsersFilter] = useState(false)
    return (
        <UnisenderCreateListContext.Provider
            value={{
                listName,
                setListName,
                usersFilter,
                setUsersFilter
            }}>

            {
                !listName || !usersFilter
                ? <UnisenderCreateListData />
                : <UnisenderCreatingListProgress />
            }

        </UnisenderCreateListContext.Provider>
    )
}

export default UnisenderCreateList