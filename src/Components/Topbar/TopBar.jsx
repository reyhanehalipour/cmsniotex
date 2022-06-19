import React from "react";
import './Topbar.css'

import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function TopBar(){

    return(
     <div className="TopBar"> 

<div className="TopBarWrapper">
  <div className="Top-left">
      <span className="logo">Niotex♥️
      </span>

      </div>

   <div className="Top-right">
    <div className="TopBar-IconsContainer">
    <NotificationsIcon/>
        <span className="TopIconBadghe"> 2</span>
    </div>

    <div className="TopBar-IconsContainer">
    <LanguageIcon/>
        <span className="TopIconBadghe"> 2</span>
    </div>

    <div className="TopBar-IconsContainer">
    <SettingsIcon/>
     </div>
    <img src="image/3.jpg" className="TopAvatar"/>
    </div>
   </div>
 </div>  
    )
}