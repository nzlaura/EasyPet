exports.up = function (knex) {
  return knex.schema.createTable('pet_profile', function (t) {
    t.increments('id').primary()
    t.string('name')
    t.date('dob')
    t.string('type')
    t.string('breed')
    t.string('gender')
    t.string('user_name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('pet_profile')
}
