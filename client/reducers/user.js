const initialState = []

export default function user (state = initialState, action) {

  const { userData } = action

  switch (action.type) {

    case SET_USER_DATA :
      return userData

    default :
      return state
  }
}

