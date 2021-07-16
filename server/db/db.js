const connection = require('./connection')

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

function insertNewUser (userdata, db = connection) {
  return db('users')
    .insert({ username: userdata.username, password: userdata.password })
}

module.exports = {
  userExists,
  getUserByUsername,
  userEmailExists,
  users,
  insertNewUser
}
