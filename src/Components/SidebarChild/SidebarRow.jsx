import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarRow.css"

function SidebarRow({ src, Icon, title }) {
    console.log(title)
    return (
        <div className="SidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon/>}
            <h4 className="lp">{title}</h4>
        </div>
    )
}

export default SidebarRow
