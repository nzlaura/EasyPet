const express = require('express')
const passport = require('passport')
const user = require('../db/db')
const logout = require('express-passport-logout')
// const checkAuthentication = require('../lib/lib')
require('./passportConfig')(passport)

const router = express.Router()

router.post('/login', async (req, res, next) => {
  await passport.authenticate('local', (err, user) => {
    if (err) throw err
    if (!user) res.send('No User Exists')
    else {
      req.logIn(user, (err) => {
        if (err) throw err
        // res.cookie('session', req.user.username, { secure: true, signed: true, expires: new Date(Date.now() + 3600) });
        res.send('Successfully Authenticated User:' + req.user.username)
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
      res.send('user created successfully')
      return null
    })
    .catch(err => console.log(err))
})

router.get('/user', (req, res) => {
  res.send(req.user)
})

router.get('/logout', (req, res) => {
  req.logout()
  res.send('logged out')
  return null
})



module.exports = router
