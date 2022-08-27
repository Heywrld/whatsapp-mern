import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, IconButton } from "@mui/material";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
    <div className= "sidebar__header">
    <Avatar src= "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />
          <div className= "sidebar__headerRight">
          <IconButton>
          <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton> 
          <IconButton>
          <MoreVertIcon />
          </IconButton>         
        </div>
    </div>

    <div className= "sidebar__search">
     <div className="sidebar__searchContainer">
     <SearchOutlinedIcon />
     <input placeholder="Search or start new chat" type="text" />
     </div>   
    </div>

    <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
    </div>

    </div>
  )
}

export default Sidebar;