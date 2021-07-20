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
    .catch(err => console.log(new Error(err)))
}

export function register (username, password) {
  return request
    .post(`${rootUrl}/register`)
    .send({
      username: username,
      password: password
    })
    .then(res => res.body)
    .catch(err => console.log(new Error(err)))
}

export function signOff () {
  return request
    .get(`${rootUrl}/logout`)
    .then(res => res.body)
    .catch(err => console.log(new Error(err)))
}

export function getUser () {
  return request
    .get(`${rootUrl}/user`)
    .then(res => res.body)
    .catch(err => console.log(new Error(err)))
}
