const express = require('express')

const router = express.Router()

const { updateUserProfile, getUserByUsername } = require('../db/db')

router.get('/', (req, res) => {
  const username = req.params.username
  getUserByUsername(username)
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Oops, something went wrong' })
    })
})

router.patch('/:username', (req, res) => {
  const username = req.params.username
  updateUserProfile(username, req.body)
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Oops, something went wrong' })
    })
})

module.exports = router