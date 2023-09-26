import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { Home } from '../pages/Home'
import { ItemDetailPage } from '../pages/ItemDetailPage'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
import { ErrorPage } from '../pages/ErrorPage'

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
  }

])

export const Navigation = () => {
  return (
    <RouterProvider router={router}/>
  )
}
