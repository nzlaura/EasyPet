exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { id: 1, username: 'doggolover', phone: 221054478, full_name: 'Jack Craker', email: 'doggolover@gmail.com', password: '' }
      ])
    })
}
