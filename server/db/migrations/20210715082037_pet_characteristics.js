exports.up = function (knex) {
  return knex.schema.createTable('pet_characteristics', function (t) {
    t.increments('id').primary()
    t.string('activity')
    t.string('sleephours')
    t.string('social_human')
    t.string('social_animal')
    t.integer('pet_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('pet_characteristics')
}
