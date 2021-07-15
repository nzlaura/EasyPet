exports.up = function (knex) {
  return knex.schema.createTable('users', function (t) {
    t.increments('id').primary()
    t.string('username').unique()
    t.integer('phone')
    t.string('full_name')
    t.string('email').unique()
    t.text('password').unique() 
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
