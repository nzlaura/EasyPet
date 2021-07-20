const user = require('../db/db')
const bcrypt = require('bcryptjs')
const LocalStrategy = require('passport-local').Strategy

function initialize (passport) {
  passport.use(
    new LocalStrategy((username, password, done) => {
      user.getUserByUsername(username)
        .then((user, err) => {
          if (err) throw err
          if (!user) return done(null, false, { message: 'Invalid Username' })
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) throw err
            if (result === true) {
              return done(null, user)
            } else {
              return done(null, false, { message: 'Invalid Password' })
            }
          })
          return null
        })
        .catch(err => console.log(err))
    })
  )

  passport.serializeUser((user, cb) => {
    cb(null, user.username)
  })

  passport.deserializeUser((username, cb) => {
    user.getUserByUsername(username)
      .then(user => {
        const userInformation = {
          username: user.username
        }
        return cb(null, userInformation)
      })
      .catch(err => console.log(err))
    return null
  })
}

module.exports = initialize
