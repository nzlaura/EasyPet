import React, { useState, useEffect } from 'react'

import FaqListItem from './FaqListItem'

import { getFaqs } from '../apis/apiClient'

import faqImage from '../styles/ImageAssets/AnimationOne/HomeGroup.png'

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

        <div className='text-4xl flex text-left mb-36 ml-36'>
          <p>Everything you need to know about EasyPet</p>
        </div>

        {faqState.map(faq => {
          return (
            <FaqListItem key={faq.id} faq={faq} />
          )
        })}
      </div>
    </>
  )
}

export default FaqList
