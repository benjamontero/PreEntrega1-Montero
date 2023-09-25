import React from 'react'

export const ItemListContainer = ({children}) => {
  return (
    <div className='p-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8'>
      {children}
      
    </div>
  )
}
