import * as requests from '../apis/apiClient'

export function sendUserUpdate (id, update) {
  return (dispatch) => {
    return requests.updateUserProfile(id, update)
      .catch(err => dispatch(showError(err)))
  }
}
