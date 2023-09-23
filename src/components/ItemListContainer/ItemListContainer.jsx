import React from 'react'
import logoMatearNombre from '../../assets/logoMatearNombre.svg'
export const ItemListContainer = ({greeting}) => {
  return (
    <div className='flex flex-col	items-center'>
      <h1 className='text-4xl text-center'>{greeting}</h1>

      <div className=' flex justify-center flex-col items-center rounded-lg w-2/5 bg-cyan-50 p-4 m-4 border-2 shadow-lg shadow-cyan-200/50 '>
        <img className='w-96 animate-pulse ' src={logoMatearNombre} alt="" />
        <h2 className='p-3 text-4xl font-bold'>Sitio en construccion</h2>

      </div>
    </div>
  )
}
