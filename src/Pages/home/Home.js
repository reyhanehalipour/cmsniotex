import React from "react";
import Features from "../../Components/Features/Features";
import Chart from "../../Components/Chart/Chart";
import './Home.css'
import  {xAxisData} from "../../datas";
import WidegetSM from "../../Components/WidegetSM/WidegetSM";
import WidgetLg from "../../Components/WidgetLg/WidgetLg";



export default function Home (){
    return(
        <div className="home"> 
           <Features/>
           <Chart grid title="Month sale" data={xAxisData} dataKey="Sale"/>
           <br/>
      <div className="homeWidgets">

          <WidegetSM/>    
         <WidgetLg/>
        </div>
         
        </div>
        
    )
}