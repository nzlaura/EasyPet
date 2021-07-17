import React, { useState, useEffect } from 'react'

import FaqListItem from './FaqListItem'

import { getFaqs } from '../apis/apiClient'

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
    <div>
      <h1>Frequently Asked Questions</h1>
      <p>EasyPet assists pet owners in caring and managing their pets. Here are a few helpful</p>
      {faqState.map(faq => {
        return (
          <FaqListItem key={faq.id} faq={faq} />
        )
      })}
    </div>
  )
}

export default FaqList
