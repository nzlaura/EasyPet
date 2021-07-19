const express = require('express')
const passport = require('passport')
const user = require('../db/db')
require('./passportConfig')(passport)

const router = express.Router()

router.post('/login', async (req, res, next) => {
    // it is better to treat this like a regular promise instead of async await since if there is an error you want to catch it and send back the appropriate status code - like you are in the register route
  await passport.authenticate('local', (err, user) => {
    if (err) throw err
    if (!user) res.send('No User Exists')
    else {
      req.logIn(user, (err) => {
        if (err) throw err
        res.send('Successfully Authenticated')
      })
    }
  })(req, res, next)
})

router.post('/register', (req, res) => {
  user.userExists(req.body.username)
    .then(result => {
      if (result) res.send('User Already Exists')
      if (!result) {
        user.insertNewUser(req.body.username, req.body.password)
      }
      res.send('user created successfully' + req.body.username)
      return null
    })
    .catch(err => console.log(err))
})

router.get('/user', (req, res) => {
  res.send(req.user)
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/login')
})

module.exports = router
