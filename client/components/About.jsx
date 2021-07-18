import React from 'react'

import faqImage from '../styles/ImageAssets/AnimationOne/HomeGroup.png'

function About () {
  return (
    <>
      <div className='mx-auto flex items-center justify-center'>
        <img src={faqImage}/>
      </div>
      <div className='container'>
        <p className='text-8xl flex text-left font-bold mt-36 mb-4 ml-36'>About EasyPet</p>
        <p className='text-4xl flex text-left mb-36 ml-36'>Everything you need to know to use EasyPet. This is where instructions can live.</p>
      </div>
    </>
  )
}

export default About
