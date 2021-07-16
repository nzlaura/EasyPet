const sgMail = require('@sendgrid/mail')
const { sendContactForm } = require('./contact')

jest.mock('@sendgrid/mail', () => ({
  setApiKey: jest.fn(),
  send: jest.fn()
}))

describe('Send contact form to email address', () => {
  const contactForm = {
    email: 'leilaniheather@gmail.com',
    subject: 'Hello',
    text: 'Laura\nleilaniheather@gmail.com\nWould you like some work?',
    message: 'Laura<br>leilaniheather@gmail.com<br>Would you like some work?'
  }
  const replyEmail = 'leilaniheather@gmail.com'
  sgMail.send.mockImplementation(() => Promise.resolve())
  sendContactForm(contactForm)
  const msg = sgMail.send.mock.calls[0][0]

  it('sets the subject correctly', () => {
    expect(msg.subject).toContain('Hello')
  })

  it('sets the name in body of message correctly', () => {
    expect(msg.text).toContain('Laura')
  })

  it('sets the message in body of message correctly', () => {
    expect(msg.html).toContain('Would you like some work?')
  })

  it('sending the contact form to the correct email address supplied', () => {
    expect(msg.to).toEqual(replyEmail)
  })
})
