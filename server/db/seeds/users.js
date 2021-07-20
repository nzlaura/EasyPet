const bcrypt = require('bcryptjs')

exports.seed = function (knex) {
  return knex('users').del()
    .then(() => Promise.all([
      bcrypt.hash('crackerpassword', 10)
    ]))
    .then(function (crackerHash) {
      return knex('users').insert([
        {
          id: 1,
          username: 'doggolover',
          phone: 221054478,
          firstname: 'Jack',
          lastname: 'Cracker',
          dob: 10011991,
          email: 'doggolover@gmail.com',
          address: '42 Wallaby Way',
          city: 'Sydney',
          password: crackerHash
        }
      ])
    })
}
