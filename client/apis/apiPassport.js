import request from 'superagent'

const rootUrl = 'api/v1/auth'

export function login (username, password) {
  return request
    .post(`${rootUrl}/login`)
    .send({
      username: username,
      password: password
    })
    .then(res => res.body)
}

export function register (username, password) {
  return request
    .post(`${rootUrl}/register`)
    .send({
      username: username,
      password: password
    })
    .then(res => res.body)
}

export function signOff () {
  return request
    .delete(`${rootUrl}/logout`)
    .then(res => res.body)
}

export function getUser () {
  return request
    .get(`${rootUrl}/user`)
    .then(res => res.body)
}
