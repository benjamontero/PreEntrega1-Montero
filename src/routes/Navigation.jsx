import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { Home } from '../pages/Home'
import { ItemDetailPage } from '../pages/ItemDetailPage'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'

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
    }

])

export const Navigation = () => {
  return (
    <RouterProvider router={router}/>
  )
}
