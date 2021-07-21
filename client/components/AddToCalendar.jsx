import React, { useState } from 'react'
import { saveEvent } from '../actions'
// import { subHours } from 'date-fns'
import { connect } from 'react-redux'

function AddToCalendar (props) {
  const [eventItems, setEventItems] = useState(
    {
      title: '',
      type: '',
      date: '',
      time: ''
    }
  )
  const [isSendingMessage, setIsSendingMessage] = useState(false)

  function handleChange (e) {
    const { name, value } = e.target
    setEventItems({
      ...eventItems,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    const adjDate = eventItems.date + 'T' + eventItems.time + ':00+0000'
    const eventDetails = { ...eventItems, date: adjDate }
    props.dispatch(saveEvent(eventDetails))
    setIsSendingMessage(true)
    setTimeout(() => window.location.reload(), 1000 )
  }

  return (
    <>
      <form className='mt-10 ml-20' onSubmit={handleSubmit}>
        <h1 className='ml-2 mb-2 font-bold'>Add Calendar Item</h1>
        <input className='rounded-md shadow-sm col-1 h-12 p-4 ml-2 mr-2' onChange={handleChange} type='text' id='title' name='title' value={eventItems.title} placeholder="Enter Event" />
        <input className='rounded-md shadow-sm col-1 h-12 p-4 ml-2 mr-2' onChange={handleChange} type='text' id='type' name='type' value={eventItems.type} placeholder='Enter Event Type' />
        <input className='rounded-md shadow-sm col-1 h-12 p-4 ml-2 mr-2' onChange={handleChange} type='date' id='date' name='date' value={eventItems.date} placeholder='Date'/>
        <input className='rounded-md shadow-sm col-1 h-12 p-4 ml-2 mr-2' onChange={handleChange} type='time' id='time' name='time' value={eventItems.time} placeholder='Time'/>
        <button className='bg-black hover:bg-gray-900 text-white font-bold rounded-md col-1 h-12 w-36 ml-2 mr-2' type='submit'>Submit</button>
        {isSendingMessage && <p className='mx-auto text-s mt-12 ml-20 text-white text-bold'>Event added to your calendar!</p>}
      </form>
    </>
  )
}

export default connect()(AddToCalendar)
