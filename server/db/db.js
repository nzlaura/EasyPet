const connection = require('./connection')
const bcrypt = require('bcryptjs')

function userExists (username, db = connection) {
  return db('users').select()
    .where('username', username)
    .first()
    .then(result => {
      // this could just be return (result === undefined)
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
      return result === undefined
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

function getFaqs (db = connection) {
  return db('faq').select()
}

function getFaqBySearchString (searchString, db = connection) {
  return db('faq').select()
    .where('question', 'LIKE', `%${searchString}%`)
    .orWhere('answer', 'LIKE', `%${searchString}%`)
}

function getAllEvents (db = connection) {
  return db('events')
    .select()
}

// TODO: join user db with events to display events by individual user
function addNewEvent (event, db = connection) {
  return db('events')
    .insert({ title: event.title, type: event.type, date: event.date })
}

// function updateUserProfile {username, db = connection}

module.exports = {
  userExists,
  getUserByUsername,
  userEmailExists,
  users,
  insertNewUser,
  getFaqs,
  getFaqBySearchString,
  getAllEvents,
  addNewEvent
}
