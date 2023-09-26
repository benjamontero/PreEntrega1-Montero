import React from 'react'
import { Layout } from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import matearError from '../assets/matearError.svg'

export const ErrorPage = () => {
  return (
   <Layout>
     <section >
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-cyan-300 dark:text-primary-500">404</h1>
            <div className='flex justify-center'>
                <img className='h-48' src={matearError} alt="" />
                </div>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Ups... el Mate se cayo</p>
            <p className="mb-4 text-lg  text-gray-500 dark:text-gray-400">Esta pagina esta siendo construida, si me va bien en la preEntrega2, estara terminada. </p>
            <Link to={"/"} className="inline-flex text-w bg-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Volver al Home</Link>
        </div>   
    </div>
</section>
   </Layout>
  )
}
