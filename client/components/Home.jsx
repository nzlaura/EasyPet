import React from 'react'

import faqImage from '../styles/ImageAssets/AnimationOne/HomeGroup.png'
import img1 from '../styles/ImageAssets/AnimationOne/Vet.png'
import img2 from '../styles/ImageAssets/AnimationOne/Cat.png'
import img3 from '../styles/ImageAssets/AnimationOne/DogWalker.png'
import img4 from '../styles/ImageAssets/AnimationOne/TwoDogs.png'

function Home () {
  return (
    <>
      <div className='mx-auto flex items-center justify-center'>
        <img src={faqImage}/>
      </div>

      <div className='container grid grid-cols-2'>
        <div>
          <p className='text-8xl cols-span-2 flex text-left font-bold mt-36 mb-10 ml-36'>A Digital Diary For Your Pet</p>
          <p className='text-4xl flex text-left ml-36 mb-60'>EasyPet assists pet owners in caring for and managing their pets.</p>
        </div>
        <div>
          <button className='bg-black hover:bg-gray-900 text-white font-bold text-5xl rounded-md flex items-center justify-center mt-60 ml-60 h-32 w-96' type='submit'>Sign Up</button>
          <p className="ml-60 h-12 text-white text-sm">Have an account? <a href="#/login"> Log in</a></p>
        </div>
      </div>

      <div className='container grid grid-cols-2 mb-12'>
        <div>
          <img src={img1}/>
        </div>
        <div>
          <p className='text-6xl flex text-left font-bold mt-36 mb-4 ml-36'>Never miss a vet appointment</p>
          <p className='text-3xl flex text-left mb-12 ml-36'>EasyPet assists pet owners in caring for and managing their pets</p>
          <button className='bg-black hover:bg-gray-900 text-white font-bold text-xl rounded-md flex items-center justify-center ml-36 h-20 w-60' type='submit'>Learn More</button>
        </div>
      </div>

      <div className='container grid grid-cols-2 mb-12'>
        <div>
          <p className='text-6xl flex text-left font-bold mt-36 mb-4 ml-36'>More quality time with your furry friends</p>
          <p className='text-3xl col-2 flex text-left ml-36 mb-12'>Less admin, more downtime</p>
          <button className='bg-black hover:bg-gray-900 text-white font-bold text-xl rounded-md flex items-center justify-center ml-36 h-20 w-60' type='submit'>Learn More</button>
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
          <p className='text-6xl flex text-left font-bold mt-36 mb-4 ml-36'>More time in the great outdoors</p>
          <p className='text-3xl col-2 flex text-left ml-36 mb-12'>Less time organising</p>
          <button className='bg-black hover:bg-gray-900 text-white font-bold text-xl rounded-md flex items-center justify-center ml-36 h-20 w-60' type='submit'>Learn More</button>
        </div>
      </div>

      <div className='container grid grid-cols-2 mb-12'>
        <div>
          <p className='text-6xl flex text-left font-bold mt-36 mb-4 ml-36'>"I love using EasyPet, it has changed my life"</p>
          <p className='text-3xl col-2 flex text-left ml-36 mb-12'>Adam, Wellington, New Zealand</p>
          <button className='bg-black hover:bg-gray-900 text-white font-bold text-xl rounded-md flex items-center justify-center ml-36 h-20 w-60' type='submit'>Learn More</button>
        </div>

        <div>
          <img src={img4}/>
        </div>
      </div>
    </>
  )
}

export default Home
