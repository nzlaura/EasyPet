const bcrypt = require('bcryptjs')

exports.seed = function (knex) {
  return knex('users').del()
    .then(() => Promise.all([
      bcrypt.hash('crackerpassword', 10),
      bcrypt.hash('otterqueen', 10)
    ]))
    .then(function (crackerHash, otterqueen) {
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
        },
        {
          id: 2,
          username: 'SarahIsLive',
          phone: 221054478,
          firstname: 'Sarah',
          lastname: 'Emerson',
          dob: 10011990,
          email: 'sarahlovesotters@gmail.com',
          address: '42 otter Way',
          city: 'Singapore',
          password: otterqueen
        }
      ])
    })
}
