exports.up = function (knex) {
  return knex.schema.createTable('users', function (t) {
    t.increments('id').primary()
    t.string('username').unique()
    t.integer('phone')
    t.string('full_name')
    t.string('email').unique()
    t.string('password').unique() //might need to be text or binary, since hashes are really long
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
