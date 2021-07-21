import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { format, startOfMonth } from 'date-fns'
import '@zach.codes/react-calendar/dist/calendar-tailwind.css'
import backgroundImage from '../../server/public/ImageAssets/AnimationOne/HomeGroup.png'
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
    <div className='h-auto bg-cover mb-20' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <p className='text-5xl items-left font-bold pt-12 ml-20 text-black z-50'>My Pet Diary</p>
      <div className="mt-12">
      <AddToCalendar></AddToCalendar>
      </div>
      <div className="container rounded-md ml-20 h-auto">
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
    </div>
    </>
  )
}

function mapStateToProps (state) {
  return { events: state.events }
}

export default connect(mapStateToProps)(MyMonthlyCalendar)
