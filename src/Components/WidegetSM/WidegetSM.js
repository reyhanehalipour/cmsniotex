import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import './WidegetSM.css'
import  {NewMembers} from './../../datas'

export default function WidegetSM(){
    return(
        <div className="widegtsm">
        
            <span className="widegetitle"> new join members</span>
            <ul className="widegtsmlist">
                {NewMembers.map( user =>(
                     <li key={user.id} className="widegtlistitem">
                     <img src={user.img}   className="widegtimg"/>
                     <div className="widegtsmuser">
                       <span className="username">{user.username}</span>
                       <span className="usertitle">{user.title}</span>
                     </div>
                     <button className="widegtbutton">
                       <VisibilityIcon   className="wedegtbuttonicon"/>
                     </button>
                 </li>
 
                ))}
             

            </ul>
        </div>
    )
}