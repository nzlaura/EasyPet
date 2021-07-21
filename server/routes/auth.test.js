import request from 'supertest'

import server from '../server'
import db from '../db/db'

jest.mock('../db/db')

afterEach(() => {
  jest.clearAllMocks()
})

describe('POST /register', () => {
  test('successful req of existing user', () => {
    db.userExists.mockImplementation(() => {
      return Promise.resolve([
        {
          id: 1,
          username: 'doggolover',
          phone: 221054478,
          firstname: 'Jack',
          lastname: 'Cracker',
          dob: 10011991,
          email: 'doggolover@gmail.com',
          address: '42 Wallaby Way',
          city: 'Sydney',
          password: 'password'
        }
      ])
    })
    return request(server)
      .post('/api/v1/auth/register')
      .expect(200)
      .then(req => {
        expect(req).toBeTruthy()
        return null
      })
  })

  test('returns an error when it fails', () => {
    db.userExists.mockImplementation(() => {
      return Promise.reject(new Error('test error'))
    })
    return request(server)
      .post('/api/v1/auth/register')
      .expect(500)
      .then((res) => {
        const { errors } = res.body
        expect(errors).toHaveLength(1)
        expect(errors[0].error).not.toMatch('test error')
        expect(errors[0].error).toMatch('Unable to register user')
        return null
      })
  })
})