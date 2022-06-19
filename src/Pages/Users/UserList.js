import { useState } from 'react'
import { DataGrid, useGridNativeEventListener } from '@mui/x-data-grid';
import  {rows} from './../../datas'
import './UserList.css'
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export default function UserLIst() {
 
  const[ userData, setuserData]=useState(rows)

 const userdelete = userID =>{
   setuserData(userData.filter (user=> user.id != userID))
 }

  const columns = [
    { field: 'id',
    headerName: 'ID',
     width: 90 ,
  },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) =>{
        return(
          <>
          <Link to='/' className='Link'>
          <div className ='userlistuser'>
            <img src={params.row.avatar} className='userlistimg'/>
            {params.row.username}
          </div>
          </Link>
          </>
        )
      }
    },

    { field: 'email',
      headerName: 'Email',
       width: 200,
    },



    { field: 'status',
      headerName: 'Status',
       width: 120,
    },

    { field: 'transaction',
    headerName: 'Transaction',
     width: 160,
  },

  { field: 'action',
  headerName: 'Action',
   width: 160,
   renderCell:(params) =>{
     return(
       <>
       <Link to={`/user/${params.row.id}`} claaName='Link'>
         <button className='userlistedite'>edite</button>
       </Link>
       <DeleteOutlineIcon  
       className='userlistdelete'
       onClick={ ()=> userdelete(params.row.id)}    />
       
       </>
     )
   }
},


  ];

  return (
  <div  className='userlist'>
 <DataGrid
   rows={userData}
   columns={columns}
   pageSize={4}
   rowsPerPageOptions={[5]}
   checkboxSelection
   disableSelectionOnClick
 />
</div>
  );
}
