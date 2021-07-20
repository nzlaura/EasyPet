exports.up = function (knex) {
  return knex.schema.createTable('events', function (t) {
    t.increments('id').primary()
    t.string('title')
    t.string('type')
    t.integer('date')
    t.integer('time')
    t.integer('pet_id')
    t.integer('user_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('events')
}
