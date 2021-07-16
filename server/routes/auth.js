const express = require('express')
const passport = require('passport')
const bcrypt = require('bcryptjs')
const user = require('../db/db')
require('./passportConfig')(passport)

const router = express.Router()

router.post('/login', async (req, res, next) => {
  await passport.authenticate('local', (err, user) => {
    if (err) throw err
    if (!user) res.send('No User Exists')
    else {
      req.logIn(user, (err) => {
        if (err) throw err
        res.send('Successfully Authenticated')
        console.log(req.user)
      })
    }
  })(req, res, next)
})

router.post('/register', (req, res) => {
  user.userExists(req.body.username)
    .then(result => {
      if (result) res.send('User Already Exists')
      if (!result) {
        const hashedPassword = bcrypt.hash(req.body.password, 10)

        const newUser = {
          username: req.body.username,
          password: hashedPassword
        }
        return user.insertNewUser(newUser)
      }
      return null
    })
    .then(ids => {
      req.login = { id: ids }
      res.send('new user inserted')
      return null
    })
    .catch(err => console.log(err))
})

router.get('/user', (req, res) => {
  res.send(req.user)
})

module.exports = router
