import React, { useState } from 'react'
import { saveEvent } from '../actions'
import { subHours } from 'date-fns'
import { connect } from 'react-redux'

function AddToCalendar (props) {
  const [eventItems, setEventItems] = useState(
    {
      title: '',
      type: '',
      date: subHours(new Date(), 1)
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
    console.log('test:', eventItems)
    props.dispatch(saveEvent(eventItems))
  }

  // TODO: Name placeholders more appropriately
  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input className='rounded-md shadow-sm col-1 h-12 ml-20 p-4' onChange={handleChange} type='text' id='title' name='title' value={eventItems.title} placeholder="Appointment info" />
        <input className='rounded-md shadow-sm col-1 h-12 ml-20 p-4' onChange={handleChange} type='text' id='type' name='type' value={eventItems.type} placeholder='Type?' />
        <input className='rounded-md shadow-sm col-1 h-12 ml-20 p-4' onChange={handleChange} type='date' id='date' name='date' value={eventItems.date} placeholder='Date'/>
        <button className='bg-black hover:bg-gray-900 text-white font-bold rounded-md flex items-center justify-center col-1 h-12 mt-8 mb-20' type='submit'>Submit</button>
      </form>
    </div>

  )
}

export default connect()(AddToCalendar)
