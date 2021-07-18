import React, { useEffect, useState } from 'react'
import { getFaqBySearchString } from '../apis/apiClient'
import FaqListItem from './FaqListItem'

function SearchFAQ (props) {
  const searchString = props.match.params.searchString
  const [faqState, setFaqState] = useState([])
  useEffect(() => {
    return getFaqBySearchString(searchString)
      .then(faqs => {
        setFaqState(faqs)
        return null
      })
  }, [searchString])
  return (
    <>
      {faqState.map(faq => {
        return (
          <FaqListItem key={faq.id} faq={faq} />
        )
      })}
    </>
  )
}
export default SearchFAQ
