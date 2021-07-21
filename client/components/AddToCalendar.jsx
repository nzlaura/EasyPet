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
  }

  return (

    // <div className='container'>
    <form className='grid grid-cols-1 grid-rows-6 w-5/12 ml-52 mt-96 flex' onSubmit={handleSubmit}>
      <label className='my-4' htmlFor='event'>Event Name</label>
      <input className='rounded-md shadow-sm col-1 h-12 p-4' onChange={handleChange} type='text' id='title' name='title' required value={eventItems.title} placeholder="Enter Event" />
      <label className='my-4' htmlFor='eventtype'>Event Type</label>
      <input className='rounded-md shadow-sm col-1 h-12 p-4' onChange={handleChange} type='text' id='type' name='type' required value={eventItems.type} placeholder='Enter Event Type' />
      <label className='my-4' htmlFor='date'>Event Date</label>
      <input className='rounded-md shadow-sm col-1 h-12 p-4' onChange={handleChange} type='date' id='date' name='date' required value={eventItems.date} placeholder='Date'/>
      <label className='my-4' htmlFor='time'>Event Time</label>
      <input className='rounded-md shadow-sm col-1 h-12 p-4' onChange={handleChange} type='time' id='time' name='time' required value={eventItems.time} placeholder='Time'/>
      <button className='bg-black hover:bg-gray-900 text-white font-bold rounded-md flex items-center justify-center col-1 h-12 mt-8 w-1/3' type='submit'>Submit</button>
    </form>
    // </div>

  )
}

export default connect()(AddToCalendar)
