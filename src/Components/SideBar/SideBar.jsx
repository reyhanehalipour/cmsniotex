import React from "react";
import './SideBar.css'


import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from "react-router-dom";

export default function SideBar(){
    return (
        <div className="sidBar">
        <div className="sidebarWrapper">
 
          <div className="sidebarMenu">
 
            <h3 className="sidebarTitle">
                dashboard
                 </h3>
 
               <ul className=" sidebarList">
                 <Link to='/' className='Link'>
                 <li className="sideBarListItem-active">
                     <LineStyleIcon className="sideBarIcon"/>
                     Home
                 </li>
                 </Link>
                 <li className="sideBarListItem">
                     <TimelineIcon className="sideBarIcon"/>
                     Analytics
                 </li>
 
                 <li className="sideBarListItem">
                     <TrendingUpIcon className="sideBarIcon"/>
                     sales
                 </li>
            </ul>
         </div>

         <div className="sidebarMenu">
 
 <h3 className="sidebarTitle">
     Quick menu
      </h3>

    <ul className=" sidebarList">
      <Link to="/users" className='Link'>
      <li className="sideBarListItem">
          <PermIdentityIcon className="sideBarIcon"/>
          Users
      </li>
      </Link>
      <Link to="/newUsers" className='Link'>
      <li className="sideBarListItem">
          <PersonOutlineIcon className="sideBarIcon"/>
          New Users
      </li>
      </Link>

       <Link to='/products'  className='Link'>
      <li className="sideBarListItem">
          <StorefrontIcon className="sideBarIcon"/>
          products
      
      </li>
      </Link>
      <li className="sideBarListItem">
          <AttachMoneyIcon className="sideBarIcon"/>
          transactions
      </li>


      <li className="sideBarListItem">
          <BarChartIcon className="sideBarIcon"/>
          Reports
      </li>

 </ul>

</div>


<div className="sidebarMenu">
 
 <h3 className="sidebarTitle">
     Notifications
      </h3>

    <ul className=" sidebarList">

      <li className="sideBarListItem">
          <MailOutlineIcon className="sideBarIcon"/>
          Mail
      </li>

      <li className="sideBarListItem">
          < DynamicFeedIcon className="sideBarIcon"/>
          Feedbock
      </li>

      <li className="sideBarListItem">
          <ChatBubbleOutlineIcon className="sideBarIcon"/>
          Messages
      
      </li>

     
 </ul>

</div>

<div className="sidebarMenu">
 
 <h3 className="sidebarTitle">
     staff
      </h3>

    <ul className=" sidebarList">

      <li className="sideBarListItem">
          < WorkOutlineIcon className="sideBarIcon"/>
          Manage
      </li>

      <li className="sideBarListItem">
          < TimelineIcon className="sideBarIcon"/>
          Analytics
      </li>

      <li className="sideBarListItem">
          <ReportIcon className="sideBarIcon"/>
          Reports
      
      </li>

     
 </ul>

</div>


       </div>
     </div>

    ) 

}