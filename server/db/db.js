const connection = require('./connection')
const bcrypt = require('bcryptjs')

// -----faq functions below -----//

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

function updateUserProfile (username, updates, db = connection) {
  return db('users').where({ username: username }).update(updates)
    .then(() => getUserByUsername(username, db))
}

// -----faq functions below -----//

function getFaqs (db = connection) {
  return db('faq').select()
}

function getFaqBySearchString (searchString, db = connection) {
  return db('faq').select()
    .where('question', 'LIKE', `%${searchString}%`)
    .orWhere('answer', 'LIKE', `%${searchString}%`)
}

// -----calendar functions below -----//

function getAllEvents (db = connection) {
  return db('events')
    .select()
}

// TODO: join user db with events to display events by individual user
function addNewEvent (event, db = connection) {
  return db('events')
    .insert({ title: event.title, type: event.type, date: event.date })
}

// -----petfunctions below -----//

function getUsersPets (username, db = connection) {
  return db('pet_profile')
    .join('users', 'pet_profile.user_name', 'users.username')
    .select('pet_profile.user_name as petUserName', 'users.username as username', 'pet_profile.name', 'pet_profile.dob', 'pet_profile.type', 'pet_profile.breed', 'pet_profile.gender')
    .where('pet_profile.user_name', username)
}

function createNewPetProfile (data, db = connection) {
  return db('pet_profile')
    .insert(data)
}

function updatePetProfile (username, updates, db = connection) {
  return db('users')
    .where({ username: username })
    .update(updates)
    .then(() => getUserByUsername(username, db))
}

module.exports = {
  userExists,
  getUserByUsername,
  updateUserProfile,
  userEmailExists,
  users,
  insertNewUser,
  getFaqs,
  getFaqBySearchString,
  getAllEvents,
  addNewEvent,
  getUsersPets,
  createNewPetProfile,
  updatePetProfile
}
