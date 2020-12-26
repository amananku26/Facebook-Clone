import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarChild/SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {

    return (
        <div className="sidebar">
            <SidebarRow src="https://avatars3.githubusercontent.com/u/16429474?s=460&u=b5939cec9740ee155f7a997d2f070a9170879a96&v=4" title="Aman Anku" /> 
            <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={ChatIcon} title="Friends" />
            <SidebarRow Icon={StorefrontIcon} title="Messenger" />
            <SidebarRow Icon={VideoLibraryIcon} title="Marketplace" />
            <SidebarRow Icon={ExpandMoreIcon}  />
        </div>
    )
}

export default Sidebar
