import React from 'react'

function FaqListItem (props) {
  const { question, answer } = props.faq

  return (
    <div className='faq'>
      <h1 className='question'>{question}</h1>
      <p className='answer'>{answer}</p>
    </div>
  )
}

export default FaqListItem
