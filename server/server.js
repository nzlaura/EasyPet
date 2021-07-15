const path = require('path')
const express = require("express")
const cors = require("cors")
const passport = require("passport")
const passportLocal = require("passport-local").Strategy
const cookieParser = require("cookie-parser")
const bcrypt = require("bcryptjs")
const session = require("express-session")
const bodyParser = require("body-parser")


const authRoutes = require('./routes/auth')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
)
server.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
)
server.use(cookieParser("secretcode"))
server.use(passport.initialize())
server.use(passport.session())
require("./passportConfig")(passport)

server.use('/api/v1/', authRoutes)

module.exports = server

// var path = require("path");
// var Router = require('./modules/router/router');
// var router = new Router(path.join(__dirname,'routes'));