exports.up = function (knex) {
  return knex.schema.createTable('users', function (t) {
    t.increments('id').primary()
    t.string('username').unique()
    t.integer('phone')
    t.string('first_name')
    t.string('last_name')
    t.date('dob')
    t.string('email').unique()
    t.text('address')
    t.string('city')
    t.text('password').unique() 
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
