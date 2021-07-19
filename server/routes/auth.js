const express = require('express')
const passport = require('passport')
const user = require('../db/db')
const logout = require('express-passport-logout')
require('./passportConfig')(passport)

const router = express.Router()

// might need tweaking so its regular like register

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) throw err
    if (!user) res.send('No User Exists')
    else {
      req.logIn(user, (err) => {
        if (err) throw err
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
  res.send('logged out')
  return null
})

module.exports = router


// example 
function addUserAndLogIn (newUser, req, res) {
  return users.addUser(newUser)
    .then(user => {
      const userDetails = {
        id: user.id,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name
      }
      return userDetails
    })
    .then((user) => {
      return req.logIn(user, err => {
        if (err) throw err
      })
    })
    .then(() => {
      res.json('User Created')
      return null
    })
    .catch(err => {
      console.log(err.message)
      return null
    })
}