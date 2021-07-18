import React, { useEffect, useState } from 'react'
import { getFaqBySearchString } from '../apis/apiClient'
import FaqListItem from './FaqListItem'

function SearchFAQ (props) {
  const searchString = props.match.params.searchString
  const [faqState, setFaqState] = useState([])
  useEffect(() => {
    return getFaqBySearchString(searchString)
      .then(faqs => {
        console.log(faqs)
        setFaqState(faqs)
        return null
      })
      .catch(error => {
        console.log(error.message)
      })
  }, [searchString])
  console.log(faqState, searchString)
  return (
    <>
      {faqState.map(faq => {
        return (
          <FaqListItem key={faq.id} answer={faq.answer} question={faq.question} />
        )
      })}
    </>
  )
}
export default SearchFAQ
