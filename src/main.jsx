import React from 'react'
import ReactDOM from 'react-dom/client'
import dotenv from 'dotenv';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate, 
} from "react-router-dom";

import './index.css'
import Products from './components/pages/products.jsx';
import RootPage from './components/pages/RootPage.jsx';
import HomePage from './components/pages/homepage.jsx';
import Cart from './components/pages/cartpage.jsx';
import { CartProvider } from './components/hooks/context.jsx';
import Checkout from './components/pages/checkout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage/>,
    children:[
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path:"/cart",
        element: <Cart/>
      },
      {
        path:"/checkout",
        element: <Checkout/>
      }
      
  
    ]
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <RouterProvider router={router}/>
    </CartProvider>
  </React.StrictMode>,
)
