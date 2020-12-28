import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarRow.css"
import { useSelector,useDispatch } from "react-redux"

function SidebarRow({ src, Icon, title }) {
    var data = useSelector((state) => state.PostData.UserData)
    return (
        <div className="SidebarRow">
            {src && <Avatar src={data.data.photoURL} />}
            {Icon && <Icon/>}
            <h4 className="lp">{title}</h4>
        </div>
    )
}

export default SidebarRow
