import React from "react";
import './WidgetLg.css'
import  {transactions} from './../../datas';

const Button =({type}) =>{

    return <button className={"widgetlgbutton " + type}>{type}</button>
}

export default function WidgetLg(){

    return(
        <div className="widgetlg">
            <h3 className="widgetlgtitle"> Last Transaction</h3>
            <table className="widgetlhtable">
                <tr className="widgetlgtr">
                    <th className="widgetlgth">Customer</th>
                    <th className="widgetlgth">Data</th>
                    <th className="widgetlgth">Amout</th>
                    <th className="widgetlgth">statuse</th>
                   
                </tr>
                {transactions.map(( transaction) => (

                 <tr key={transaction.id} className="widgetlgtr">
                    <td className="widgetlguser">
                        <img  src={transaction.img} className="img"/>
                        <span className="widetlgusername"> {transaction.customer} </span>
                    </td>
                    <td className="widgetlgData"> {transaction.date}</td>

                    <td className="widgetlgAmout"> {transaction.amount}</td>

                    <td className="widgetlgstatus"> 

                    <Button type={transaction.status}/>
                    </td>
                    
                </tr>


                ))}
               

            </table>

        </div>
    )
}