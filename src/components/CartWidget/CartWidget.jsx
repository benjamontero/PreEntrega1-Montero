import React from 'react'
import cartIcon from '../../assets/cartIcon.svg'

export const CartWidget = () => {
  return (
    <div className='flex p-4 mr-2'>
      <img className='' src={cartIcon} alt="" />
      <p className='pl-2 pt-1 text-lg'>0</p>
    </div>
  )
}
