const request = require('supertest')
const server = require('../server')
const { getAllEvents, addNewEvent } = require('../db/db')
// const { restore } = require('nock/types')

jest.mock('../db/db')
jest.mock('')

describe('GET api/v1/events', () => {
  test('event route', () => {
    const fakeEvent = [1, 'Vet', 'Appointment']
    getAllEvents.mockImplementation(() => {
      return Promise.resolve(fakeEvent)
    })
    return request(server)
      .get('/api/v1/events')
      .expect(200)
      .then(res => {
        expect(Array.isArray(res.body)).toBe(true)
        expect(res.status).toEqual(200)
        expect(res.body).toEqual(fakeEvent)
        return null
      })
  })
  test('events route fails', () => {
    getAllEvents.mockImplementation(() => {
      const err = new Error('Oops, something went wrong')
      return Promise.reject(err)
    })
    return request(server)
      .get('/api/v1/events')
      .expect(500)
      .then(res => {
        expect(res.status).toEqual(500)
        expect(res.text).toContain('Oops')
        return null
      })
  })
})

describe('POST api/v1/events', () => {
  test('events are sent correctly', () => {
    addNewEvent.mockImplementation(() => {

    })
  })
})
