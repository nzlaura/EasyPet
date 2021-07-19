const request = require('supertest')
const server = require('../server')
const send = require('../sendgrid/contact')

const baseURL = '/api/v1/contact'

const contactForm = {
  email: 'leilaniheather@gmail.com',
  subject: 'Hello',
  text: 'Laura\nleilaniheather@gmail.com\nWould you like some work?',
  message: 'Laura<br>leilaniheather@gmail.com<br>Would you like some work?'
}

jest.mock('../sendgrid/contact', () => {
  return {
    sendContactForm: jest.fn()
  }
})

test('POST /sendgrid/contact', () => {
  // remove the console.log from tests - it just produces noise in the test output
  send.sendContactForm.mockImplementation(() => Promise.resolve(console.log('Email sent')))

  return request(server)
    .post(baseURL)
    .send({
      contactForm: contactForm
    })
    .then(res => {
      expect(res.status).toEqual(201)
      return null
    })
})

test('Error happens', () => {
  send.sendContactForm.mockImplementation(() => Promise.reject(new Error('Could not send email')))

  return request(server)
    .post(baseURL)
    .send({
      contactForm: contactForm
    })
    .then(res => {
      expect(res.status).toBe(500)
      expect(res.text).toEqual('Could not send email')
      return null
    })
})
