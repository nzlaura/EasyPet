const path = require('path')
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const session = require('express-session')
// require('../server/routes/passportConfig')(passport)

const authRoutes = require('./routes/auth')

const server = express()
server.use(express.static(path.join(__dirname, 'public')))
const cookieParser = require('cookie-parser')
server.use(cookieParser('secretcode'))
server.use(express.urlencoded({ extended: true }))
server.use(
  session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true
  })
)
server.use(passport.initialize())
server.use(passport.session())

server.use(express.json())

server.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
)

server.use('/', authRoutes)

module.exports = server
