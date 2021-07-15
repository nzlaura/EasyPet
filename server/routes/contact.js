const express = require('express')
const send = require('../sendgrid/contact')

const router = express.Router()

router.post('/', (req, res) => {
  const contactForm = req.body
  send.sendContactForm(contactForm)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((error) => {
      res.status(500).send(error.message)
      return null
    })
})
module.exports = router
