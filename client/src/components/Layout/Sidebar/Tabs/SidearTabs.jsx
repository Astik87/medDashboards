import React, {useState} from "react"
import {Tabs, useMediaQuery} from "@mui/material"

const SidebarTabs = (props) => {
    const {children, className} = props
    let {initValue} = props

    if(typeof initValue !== 'number')
        initValue = 0

    const [value, setValue] = useState(initValue)

    const isMobile = useMediaQuery('(max-width: 768px)')

    return (
        <Tabs
            value={value}
            onChange={(event, value) => setValue(value)}
            orientation={isMobile ? 'horizontal' : 'vertical'}
            centered={isMobile}
            variant="scrollable"
            selectionFollowsFocus={false}
            scrollButtons
            allowScrollButtonsMobile
            className={`sidebar-tabs-wrapper ${className ? className : ''}`}>
            {children}
        </Tabs>
    )
}

export default SidebarTabs
