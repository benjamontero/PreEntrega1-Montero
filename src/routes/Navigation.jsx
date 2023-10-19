import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Home } from '../pages/Home'
import { ItemDetailPage } from '../pages/ItemDetailPage'
import { ErrorPage } from '../pages/ErrorPage'
import { CartPage } from '../pages/CartPage'
import { Checkout} from '../pages/Checkout'
const router = createBrowserRouter([

    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/category/:id',
        element: <Home/>
    },
    {
        path: '/item/:id',
        element: <ItemDetailPage/>
    },
    {
      path: '/404',
      element: <ErrorPage/>
  },
  {
    path: '/cart',
    element: <CartPage/>
},
{
  path: '/checkout',
  element: <Checkout/>
}

])

export const Navigation = () => {
  return (
    <RouterProvider router={router}/>
  )
}
