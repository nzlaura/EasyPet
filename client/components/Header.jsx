import React from 'react'
import Logo from '../styles/ImageAssets/Logo/Logo.png'

function Header () {
  return (
    <>
      <div className='flex items-center justify-center mb-4'>
        <img src={Logo} width='400 px' height= 'auto'/>
      </div>
    </>
  )
}

export default Header
