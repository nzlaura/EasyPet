import * as requests from '../apis/apiClient'
// import { postUser } from "../apis/apiClient"

// export function addUser (user) {
//     return { type: ADD_USER, user: user }
// }

// export function saveUser (user) {
//     return dispatch => {
//     postUser(user)
//     .then((newUser) => dispatch(addUser(newUser)))
//     .catch(err => dispatch(setError(err)))
//     }
// }

// // export function addUser (user) {
// //   return postUser(username, password)
// //   .then(res =>)
import { createEvent } from '../apis/apiClient'

export function sendUserUpdates (id, updates) {
  return (dispatch) => {
    return requests.updateUserProfile(id, updates)
      .catch(err => dispatch(showError(err)))
  }
}

export function saveEvent (event) {
  return (dispatch) => {
    createEvent(event)

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
