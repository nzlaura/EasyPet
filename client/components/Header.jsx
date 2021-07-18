import React from 'react'
import Logo from '../styles/ImageAssets/Logo/Logo.png'

function Header () {
  return (
    <>
      <div className='flex items-left ml-8 mt-8 -mb-12 z-50'>
        <a href="#/home">
          <img src={Logo} width='350 px' height= 'auto'/>
        </a>
      </div>
    </>
  )
}

export default Header
