import React from 'react'
import { Link } from 'react-router-dom'
import aboutImage from '../../server/public/ImageAssets/AnimationOne/FAQVet.png'
import img1 from '../../server/public/ImageAssets/AnimationTwo/CatTwo.png'
import img2 from '../../server/public/ImageAssets/AnimationTwo/DogOne.png'
import img3 from '../../server/public/ImageAssets/AnimationTwo/CatOne.png'
import img4 from '../../server/public/ImageAssets/AnimationTwo/DogThree.png'
import img5 from '../../server/public/ImageAssets/AnimationTwo/DogTwo.png'

function topFunction () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

function About () {
  return (
    <>
      <div className='mx-auto flex items-center justify-center'>
        <img src={aboutImage}/>
      </div>

      <div className='container'>
        <p className='text-8xl flex text-left font-bold mt-36 mb-4 ml-36'>About EasyPet</p>
        <p className='text-4xl flex text-left mb-36 ml-36'>Everything you need to know to make EasyPet, easy.</p>
      </div>

      <div className='container grid grid-cols-2 mb-12'>
        <div>
          <img src={img1}/>
        </div>
        <div>
          <p className='text-6xl flex text-left font-bold mt-36 mb-4 ml-36'>1. Sign up for an account</p>
          <p className='text-3xl flex text-left mb-12 ml-36'>Signing up for an account is simple- visit our signup page </p>
          <p className='text-3xl flex text-left mb-12 ml-36'>Choose a username and password, hit the register button, and you are in!</p>
          <p className='text-3xl flex text-left mb-12 ml-36'><Link to='/register'><span onClick={topFunction} className="">Click here to visit the registration page</span></Link></p>
        </div>
      </div>

      <div className='container grid grid-cols-2 mb-12'>
        <div>
          <p className='text-6xl flex text-left font-bold mt-36 mb-4 ml-36'>2. Log in to your EasyPet account</p>
          <p className='text-3xl col-2 flex text-left ml-36 mb-12'>Enter the username and password you chose when you signed up for EasyPet on the login page.
          Once you have logged in, you can see and edit your pets, calendar and user profile</p>
          <p className='text-3xl flex text-left mb-12 ml-36'><Link to='/login'><span onClick={topFunction} className="">Click here to visit the login page</span></Link></p>
        </div>
        <div>
          <img src={img2}/>
        </div>
      </div>

      <div className='container grid grid-cols-2 mb-12'>
        <div>
          <img src={img3}/>
        </div>
        <div>
          <p className='text-6xl flex text-left font-bold mt-36 mb-4 ml-36'>3. Add a pet to your account</p>
          <p className='text-3xl col-2 flex text-left ml-36 mb-12'>Log in to your account, and visit the add pet page. Add a few details about your pet and hit the submit button.
          Once you have done that, your pet will be added to your account. You can start scheduling events for them and add more important details about them.</p>
        </div>
      </div>

      <div className='container grid grid-cols-2 mb-12'>
        <div>
          <p className='text-6xl flex text-left font-bold mt-36 mb-4 ml-36'>4. Add your pets details and start using their personalised calendar.</p>
          <p className='text-3xl col-2 flex text-left ml-36 mb-12'><Link to='/calendar'><span onClick={topFunction} className="">Click here to view your calendar</span></Link></p>
          <p className='text-3xl col-2 flex text-left ml-36 mb-12'>With EasyPet, you can start keeping track of important appointments, treatments and other
          events in your pets life. We will keep them safe with your EasyPet profile, and any time you log in you can view your upcoming events</p>
        </div>
        <div>
          <img src={img4}/>
        </div>
      </div>

      <div className='container grid grid-cols-2 mb-12'>
        <div>
          <img src={img5}/>
        </div>
        <div>
          <p className='text-6xl flex text-left font-bold mt-36 mb-4 ml-36'>5. Enjoy!</p>
          <p className='text-3xl col-2 flex text-left ml-36 mb-12'>We hope you love using EasyPet!</p>
        </div>
      </div>
    </>
  )
}

export default About
