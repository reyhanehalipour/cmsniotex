
import Home from './Pages/home/Home';
import NewUsers from './Pages/NewUsers/NewUsers';
import Products from './Pages/Products/Products';
import UserList from './Pages/Users/UserList';
import Product from './Pages/Product/Product';
let routes=[
    {path: '/' , element: <Home/>},
    {path: '/users' , element: <UserList/>},
    {path: '/newUsers' , element: <NewUsers/>},
    {path: '/products' , element: <Products/>},
    {path: '/product/:productID', element: <Product/>},
]

export default routes