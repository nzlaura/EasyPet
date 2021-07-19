const path = require('path')
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const session = require('express-session')

const authRoutes = require('./routes/auth')
const contactRoute = require('./routes/contact')
const faqRoute = require('./routes/faq')
const eventsRoute = require('./routes/events')

const server = express()
server.use(express.static(path.join(__dirname, 'public')))
const cookieParser = require('cookie-parser')
server.use(cookieParser('secretcode'))
server.use(express.urlencoded({ extended: true }))
server.use(
  session({
    secret: 'secretcode', // this should be in a .env file
    resave: true,
    saveUninitialized: true
  })
)
server.use(passport.initialize())
server.use(passport.session())

server.use(express.json())

// are the cors headers necessary?
server.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
)

server.use('/api/v1/auth', authRoutes)
server.use('/api/v1/contact', contactRoute)
server.use('/api/v1/faq', faqRoute)
server.use('/api/v1/events', eventsRoute)

module.exports = server
