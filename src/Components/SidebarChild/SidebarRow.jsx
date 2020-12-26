import React from 'react'
import "./SidebarRow"

function SidebarRow({title}) {
    console.log(title)
    return (
        <div className="SidebarRow">
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
