const initialState = []

export default function (state = initialState, action) {
  const { id, event, events } = action

  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, { id, event }]
    case 'SET_EVENTS':
      return events
    default:
      return state
  }
}
