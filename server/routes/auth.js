const express = require('express')
const passport = require('passport')
const user = require('../db/db')
require('./passportConfig')(passport)

const router = express.Router()

function checkAuthentication(req,res,next){
    if(req.isAuthenticated({})){
        //req.isAuthenticated() will return true if user is logged in
        next();
    } else{
        // res.redirect("/login");
    }
}

router.post('/login', async (req, res, next) => {
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

router.post('/register', checkAuthentication, (req, res) => {
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
  res.redirect('/login')
})

module.exports = router
