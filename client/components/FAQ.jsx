import React, { useState, useEffect } from 'react'

import faq from '../data/faq'

function Faq () {
  const [faqInfo, setFaqInfo] = useState({
    id: '',
    question: '',
    answer: ''
  })

  useEffect(() => {
    faq()
  }, [])

  return (
    <>
      <div>
        <h1>Frequently Asked Questions</h1>
        <div>
          <h1><b>{faqInfo.question}</b></h1>
          <p>{faqInfo.answer}</p>
        </div>
      </div>
    </>
  )
}

export default Faq
