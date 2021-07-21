import React, { useEffect, useState } from 'react'
import { getFaqBySearchString } from '../apis/apiClient'
import FaqListItem from './FaqListItem'

import img1 from '../../server/public/ImageAssets/AnimationTwo/DogOne.png'
import img2 from '../../server/public/ImageAssets/AnimationTwo/CatOne.png'

function SearchFAQ (props) {
  const searchString = props.match.params.searchString
  const [faqState, setFaqState] = useState([])

  useEffect(() => {
    return getFaqBySearchString(searchString)
      .then(faqs => {
        setFaqState(faqs)
        return null
      })
      .catch(error => {
        console.log(error.message)
      })
  }, [searchString])

  return (
    <>
      <div className='container'>
        <p className='text-8xl flex text-left font-bold mt-36 mb-4 ml-36'>Search</p>
        <p className='text-4xl flex text-left mb-20 ml-36'>You searched for '{searchString}'. Here is a FAQ related to '{searchString}'.
        </p>

        {faqState.map(faq => {
          return (
            <FaqListItem key={faq.id} answer={faq.answer} question={faq.question} />
          )
        })}

      </div>

      <button className='bg-black hover:bg-gray-900 text-white font-bold text-xl rounded-md flex items-center justify-center ml-36 -mt-12 mb-12 h-12 w-96' type='submit'>
        <a href="#/faq">See All FAQ's</a>
      </button>

      <div className='container grid grid-cols-2'>
        <div><img className='h-80 mx-auto items-center' src={img1}/></div>
        <div><img className='h-80 ml-36 mx-auto items-center' src={img2}/></div>
      </div>
    </>
  )
}
export default SearchFAQ
