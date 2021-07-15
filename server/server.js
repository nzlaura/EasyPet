const express = require('express')
const path = require('path')

const contactRoute = require('./routes/contact')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/contact', contactRoute)

module.exports = server
