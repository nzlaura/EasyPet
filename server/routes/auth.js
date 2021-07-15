// missing a lot of important dependencies. Needs passport, bycrypt flash, session and the function from the config file
// follow https://www.youtube.com/watch?v=-RCnNyD0L-s&ab_channel=WebDevSimplified for the middlware and the dependencies to add to the file.
// just do initializePassport(passport) instead of the longer function he made, which takes in the email as a second param.
const express = require('express')
 
const User = require('../db/db')

const router = express.Router()

// missing middleware to wire up passport

router.post('/login', (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err
    if (!user) res.send("No User Exists")
    else {
      req.logIn(user, (err) => {
        if (err) throw err
        res.send("Successfully Authenticated")
        console.log(req.user)
      })
    }
  })(req, res, next)
})

router.post('/register', (req, res) => {
  User.insertNewUser({ username: req.body.username}, async (err, doc) => { // you don't want to add the new user before checking if a user exists. change this function with User.userExists
    if (err) throw err;
    if (doc) res.send("User Already Exists")
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10) // if the route hangs, do the hashing in the db functions instead

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      })
      await newUser.save() // run User.insertNewUser instead
      // need some sort of .then or a way to finish the User.insertNewUser Promose. You'd then want to send some the important user details to req.logIn
      res.send("User Created")
    }
  })
})

router.get('/user', (req, res) => {
  res.send(req.user)
})

module.exports = router
