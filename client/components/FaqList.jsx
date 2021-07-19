import React, { useState, useEffect } from 'react'

import FaqListItem from './FaqListItem'

import { getFaqs } from '../apis/apiClient'

import faqImage from '../../server/public/ImageAssets/AnimationOne/HomeGroup.png'
import img1 from '../../server/public/ImageAssets/AnimationTwo/DogOne.png'
import img2 from '../../server/public/ImageAssets/AnimationTwo/CatOne.png'

function FaqList () {
  const [faqState, setFaqState] = useState([])

  useEffect(() => {
    return getFaqs()
      .then(faqs => {
        setFaqState(faqs)
        return null
      })
  }, [])

  return (
    <>
      <div className='mx-auto flex items-center justify-center'>
        <img src={faqImage}/>
      </div>
      <div className='container'>
        <p className='text-8xl flex text-left font-bold mt-36 mb-4 ml-36'>Frequently Asked Questions</p>
        <p className='text-4xl flex text-left mb-36 ml-36'>Everything you need to know about EasyPet</p>
      </div>

      {faqState.map(faq => {
        return (
          <FaqListItem key={faq.id} answer={faq.answer} question={faq.question} />
        )
      })}
      <div className='container grid grid-cols-2'>
        <div><img className='h-80 mx-auto items-center' src={img1}/></div>
        <div><img className='h-80 ml-36 mx-auto items-center' src={img2}/></div>
      </div>
    </>
  )
}

export default FaqList
