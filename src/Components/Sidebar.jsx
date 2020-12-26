import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarChild/SidebarRow'

function Sidebar() {
    
    return (
        <div className="sidebar">
            <SidebarRow title="Pages"/>
            <SidebarRow title="Friends"/>
            <SidebarRow title = "Messenger"/>
            <SidebarRow title = "Marketplace"/>
            <SidebarRow title="Videos"/>
        </div>
    )
}

export default Sidebar
