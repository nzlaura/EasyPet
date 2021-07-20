import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { format, startOfMonth } from 'date-fns'
import '@zach.codes/react-calendar/dist/calendar-tailwind.css'

import { getEvents } from '../apis/apiClient'
import { setEvents } from '../actions/index.js'

// import EventItem from '../components/EventItem'

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
    </>
  )
}

function mapStateToProps (state) {
  console.log(state)
  return { events: state.events }
}

export default connect(mapStateToProps)(MyMonthlyCalendar)
