require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const replyEmail = 'leilaniheather@gmail.com'

function sendContactForm (contactForm) {
  const msg = {
    to: replyEmail, // i'm emailing myself the message from the user
    from: replyEmail, // must be this address, registered with sendgrid as verified sender
    subject: contactForm.subject,
    text: `${contactForm.name}\n` + `${contactForm.email}\n` + `${contactForm.message}`,
    html: `${contactForm.name}<br>` + `${contactForm.email}<br>` + `${contactForm.message}`
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
      return null
    })
    .catch((error) => {
      console.error(error)
    })
}

module.exports = {
  sendContactForm
}
