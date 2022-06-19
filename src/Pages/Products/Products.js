import { useState } from 'react'
import { DataGrid, useGridNativeEventListener } from '@mui/x-data-grid';
import  {products} from '../../datas'
import './Products.css'
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function UserLIst() {
 
  const[ productdata, setproductdata]=useState(products)

 const userproduct = productID =>{
   setproductdata(productdata.filter ( product => product.id != productID))
 }

  const columns = [
    { field: 'id',
    headerName: 'ID',
     width: 90 ,
  },
    {
      field: 'title',
      headerName: 'Name',
      width: 200,
      renderCell: (params) =>{
        return(
          <>
          <Link to={`/product/${params.row.id}`} className='Link'>
          <div className ='userlistuser'>
            <img src={params.row.avatar} className='userlistimg'/>
            {params.row.title}
          </div>
          </Link>
          </>
        )
      }
    },

   



    { field: 'price',
      headerName: 'Price',
       width: 120,
    },

  { field: 'action',
  headerName: 'Action',
   width: 160,
   renderCell:(params) =>{
     return(
       <>
       <Link to={`/product/${params.row.id}`} claaName='Link'>
         <button className='userlistedite'>edite</button>
       </Link>
       <DeleteOutlineIcon  
       className='userlistdelete'
       onClick={ ()=> userproduct(params.row.id)}    />
       
       </>
     )
   }
},


  ];

  return (
  <div  className='userlist'>
 <DataGrid
   rows={productdata}
   columns={columns}
   pageSize={3}
   rowsPerPageOptions={[5]}
   checkboxSelection
   disableSelectionOnClick
 />
</div>
  );
}
