import request from 'superagent'

const rootUrl = '/api/v1'

export function insertUser () {
  return request.post(rootUrl + '/users')
}

