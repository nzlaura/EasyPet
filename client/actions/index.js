import * as requests from '../apis/apiClient'
import { parseISO } from 'date-fns'

export function setUserData (userData) {
  return {
    type: 'SET_USER_DATA',
    userData
  }
}

export function sendUserUpdates (username, updates) {
  return (dispatch) => {
    requests.updateUserProfile(username, updates)
      .then((userData) => {
        dispatch(setUserData(userData))
        return null
    })
    .catch(() => {
    console.log('error: User Profile Update Failed')
    })
  }
}

export function saveEvent (event) {
  console.log(event)
  return (dispatch) => {
    requests.createEvent(event)
      .then((id) => {
        dispatch(addEvent(event, id))
        return null
      })
      .catch(() => {
        console.log('error: could not create new event')
      })
  }
}

export function addEvent (event, id) {
  return {
    type: 'ADD_EVENT',
    id,
    event
  }
}

export function setEvents (events, id) {
  const newEvent = parseDate(events[0])
  return {
    type: 'SET_EVENTS',
    id,
    events: events.map(parseDate)
  }
}

export function parseDate (event) {
  return { ...event, date: parseISO(event.date) }
}
