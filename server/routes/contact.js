const express = require('express')
const send = require('../sendgrid/contact')

const router = express.Router()

router.post('/', (req, res) => {
  const contactForm = req.body
  send.sendContactForm(contactForm)
})
module.exports = router
