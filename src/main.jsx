import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom";

import './index.css'
import Products from './components/pages/products.jsx';
import RootPage from './components/pages/RootPage.jsx';
import HomePage from './components/pages/homepage.jsx';

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
      
  
    ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
