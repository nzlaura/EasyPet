const express = require('express')

const router = express.Router()

const { getAllEvents, addNewEvent } = require('../db/db')

router.get('/', (req, res) => {
  getAllEvents()
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Oops, something went wrong' })
    })
})

router.post('/', (req, res) => {
  const event = req.body
  console.log('event route', event)
  addNewEvent(event)
    .then(ids => {
      res.status(201).json(ids[0])
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Oops, something went wrong' })
    })
})

module.exports = router
