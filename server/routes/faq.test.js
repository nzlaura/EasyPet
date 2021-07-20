const request = require('supertest')
const server = require('../server')

const { getFaqs, getFaqsBySearchString } = require('../db/db')

jest.mock('../db/db')

describe('GET api/v1/faq', () => {
  test('faq route', () => {
    const testFaq = [1, 'How much does easy pet cost', 'nothing']
    getFaqs.mockImplementation(() => {
      return Promise.resolve(testFaq)
    })
    return request(server)
      .get('/api/v1/faq')
      .expect(200)
      .then(res => {
        expect(Array.isArray(res.body)).toBe(true)
        expect(res.status).toEqual(200)
        expect(res.body).toEqual(testFaq)
        return null
      })
  })
  test('faq route fails', () => {
    getFaqs.mockImplementation(() => {
      const err = new Error('Something went wrong')
      return Promise.reject(err)
    })
    return request(server)
      .get('/api/v1/faq')
      .expect(500)
      .then(res => {
        expect(res.status).toEqual(500)
        expect(res.text).toContain('wrong')
        return null
      })
  })
//   test('get faq by search string working', () => {
//     const testFaq = [1, 'How much does easy pet cost', 'nothing']
//     getFaqsBySearchString.mockImplementation(() => {
//       return Promise.resolve(testFaq)
//     })
//     return request(server)
//       .get('/api/v1/faq')
//       .expect(200)
//       .then(res => {
//         expect(res.status).toEqual(200)
//         expect(res.text).toContain('cost')
//         return null
//       })
  })
})
