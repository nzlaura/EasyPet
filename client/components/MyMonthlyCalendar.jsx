import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { format, startOfMonth } from 'date-fns'
import '@zach.codes/react-calendar/dist/calendar-tailwind.css'

import { getEvents } from '../apis/apiClient'
import { setEvents } from '../actions/index.js'

import AddToCalendar from './AddToCalendar'

import {
  MonthlyBody,
  MonthlyDay,
  MonthlyCalendar,
  MonthlyNav,
  DefaultMonthlyEventItem
} from '@zach.codes/react-calendar'

function MyMonthlyCalendar (props) {
  const [currentMonth, setCurrentMonth] = useState(
    startOfMonth(new Date())
  )

  useEffect(() => {
    return getEvents()
      .then(events => {
        props.dispatch(setEvents(events))
        return null
      })
  }, [])

  return (
    <>
      <div className="container ml-20 w-3/6 h-auto">
        <MonthlyCalendar
          currentMonth={currentMonth}
          onCurrentMonthChange={date => setCurrentMonth(date)}
        >
          <MonthlyNav />

          <MonthlyBody
            events={props.events}
          >
            <MonthlyDay
              renderDay={data =>
                data.map((item, index) => {
                  return <DefaultMonthlyEventItem
                    key={index}
                    title={item.title}
                    type={item.type}
                    // Format the date here to be in the format you prefer
                    date={format(item.date, 'k:mm')}
                  />
                })
              }
            />
          </MonthlyBody>
        </MonthlyCalendar>
      </div>
      <div className="container ml-32 grid grid-cols-2">
        <div></div>
        <AddToCalendar></AddToCalendar>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  console.log(state)
  return { events: state.events }
}

export default connect(mapStateToProps)(MyMonthlyCalendar)
