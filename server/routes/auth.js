const express = require('express')
const cors = require('cors')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const session = require('express-session')
const user = require('../db/db')

const router = express.Router()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
)
app.use(
  session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true
  })
)
app.use(cookieParser('secretcode'))
app.use(passport.initialize())
app.use(passport.session())
require('./passportConfig')(passport)

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
  user.userExists(req.body.username, async (err, result) => {
    if (err) throw err
    if (result) res.send('User Already Exists')
    if (!result) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)

      const newUser = {
        username: req.body.username,
        password: hashedPassword
      }
      await user.insertNewUser(newUser)
      req.login = { username: newUser.username }
      res.send('new user inserted')
    }
  })
})

router.get('/user', (req, res) => {
  res.send(req.user)
})

module.exports = router
