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
        <input onChange={handleChange} type='text' id='title' name='title' value={eventItems.title} placeholder="Appointment info" />
        <input onChange={handleChange} type='text' id='type' name='type' value={eventItems.type} placeholder='Type?' />
        <input onChange={handleChange} type='text' id='date' name='date' value={eventItems.date} placeholder='Date'/>
        <button type='submit'>Submit</button>
      </form>
    </div>

  )
}

export default connect()(AddToCalendar)
