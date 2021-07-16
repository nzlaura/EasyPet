const connection = require('./connection')
const bcrypt = require('bcryptjs')

function userExists (username, db = connection) {
  return db('users').select()
    .where('username', username)
    .first()
    .then(result => {
      if (result === undefined) {
        return false
      } else {
        return true
      }
    })
}

function userEmailExists (email, db = connection) {
  return db('users').select()
    .where('email', email)
    .first()
    .then(result => {
      if (result === undefined) {
        return false
      } else {
        return true
      }
    })
}

function getUserByUsername (username, db = connection) {
  return db('users').select()
    .where('username', username)
    .first()
}

function users (username, db = connection) {
  return db('users').select()
}

function insertNewUser (userName, password, db = connection) {
  return bcrypt.hash(password, 10)
    .then(hashedPassword => {
      return db('users')
        .insert({ username: userName, password: hashedPassword })
    })
}

module.exports = {
  userExists,
  getUserByUsername,
  userEmailExists,
  users,
  insertNewUser
}
