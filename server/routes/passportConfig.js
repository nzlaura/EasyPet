const user = require('../db/db')
const bcrypt = require("bcryptjs")
const LocalStrategy = require("passport-local").Strategy

module.exports = function (passport) {
  passport.use(
    new LocalStrategy((username, password, done) => { 
      user.getUserByUsername(username)
        .then((user, err) => {
          console.log('getUserByName', user)
          console.log('error', err)
          if (err) throw err
          if (!user) return done(null, false)
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) throw err
            if (result === true) {
              return done(null, user)
            } else {
              return done(null, false)
            }
          })
        }) 
      })
  )



  passport.serializeUser((user, cb) => {
    cb(null, user.username)
  })

  passport.deserializeUser((username, cb) => {
    user.getUserByUsername(username, (err, user) => { 
      const userInformation = {
        username: user.username,
      }
      cb(null, userInformation)
    })
  })
}