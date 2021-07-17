import React, { useEffect, useState } from 'react'
import { getFaqBySearchString } from '../apis/apiClient'

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
      <div>
        {/* {faqState.map(faq => <p key={faq.id} faq={faq}/>)} */}
      </div>
    </>
  )
}
export default SearchFAQ
