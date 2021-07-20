import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { format, startOfMonth } from 'date-fns'
import '@zach.codes/react-calendar/dist/calendar-tailwind.css'

import { getEvents } from '../apis/apiClient'
import { setEvents } from '../actions/index.js'

import AddToCalendar from './AddToCalendar'

import img1 from '../../server/public/ImageAssets/AnimationTwo/DogThree.png'

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
      <p className='text-5xl items-left font-bold mt-20 ml-32 -mb-96 text-black z-50'>Pet Diary</p>
      <div className="container ml-32 grid grid-cols-2 z-50">
        <div></div>
        <AddToCalendar></AddToCalendar>
      </div>
      <div className="container ml-20 mb-20 -mt-96 w-3/6 h-auto">
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
      {/* <div className="container mx-auto -mt-96 grid grid-cols-2">
        <div></div>
        <div className="ml-12"><img src={img1}/></div>
      </div> */}
    </>
  )
}

function mapStateToProps (state) {
  console.log(state)
  return { events: state.events }
}

export default connect(mapStateToProps)(MyMonthlyCalendar)
