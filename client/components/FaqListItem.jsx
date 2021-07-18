import React from 'react'

function FaqListItem (props) {
  const { question, answer } = props.faq

  return (
    <div className='container grid grid-cols-2'>
      <p className='text-4xl font-bold flex text-left mb-32 ml-36'>{question}</p>
      <p className='text-xl flex text-left mb-32 ml-36'>{answer}</p>
    </div>
  )
}

export default FaqListItem
