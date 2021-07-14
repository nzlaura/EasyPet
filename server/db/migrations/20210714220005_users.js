exports.up = function (knex) {
  return knex.schema.createTable('users', function (t) {
    t.increments('id').primary()
    t.string('username').unique()
    t.integer('phone')
    t.string('email').unique()
    t.binary('hash')
    t.string('reset_password_token')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
