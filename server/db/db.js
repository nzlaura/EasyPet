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
  
function getUserByName (username, db = connection) {
  return db('users').select()
    .where('username', username)
    .first()
}

module.exports = {
userExists,
getUserByName,
userEmailExists
}