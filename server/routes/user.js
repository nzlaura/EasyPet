const express = require('express')

const router = express.Router()

const { updateUserProfile, getUserByUsername, getUsersPets } = require('../db/db')

router.get('/pets/:username', (req, res) => {
  const username = req.params.username
  getUsersPets(username)
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Oops, something went wrong' })
    })
})

router.get('/pets/pet/:username', (req, res) => {
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

router.post('/pets/addpet/:username', (req, res) => {
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

router.patch('//pets/editpet', (req, res) => {
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

//------user routes below------//

router.get('/:username', (req, res) => {
  const username = req.params.username
  getUserByUsername(username)
    .then(results => {
      results.password = null
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