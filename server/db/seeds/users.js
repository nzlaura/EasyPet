const bcrypt = require('bcryptjs')

exports.seed = function (knex) {
  return knex('users').del()
    .then(() => Promise.all([
      bcrypt.hash('crackerpassword', 10)
    ]))
    .then(function (crackerHash) {
      return knex('users').insert([
        { id: 1, username: 'doggolover', phone: 221054478, full_name: 'Jack Craker', email: 'doggolover@gmail.com', password: crackerHash }
      ])
    })
}
