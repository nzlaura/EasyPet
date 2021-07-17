import React from 'react'

function FaqListItem (props) {
  const { question, answer } = props.faq

  return (
    <div className='container grid grid-cols-2'>
      <p className='text-4xl col-span-1 flex text-left mb-32 ml-36 mr-36'>{question}</p>
      <p className='text-xl col-span-1 flex text-left mb-32 -ml-18 mr-96'>{answer}</p>
    </div>
  )
}

export default FaqListItem
