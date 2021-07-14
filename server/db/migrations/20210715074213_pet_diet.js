exports.up = function (knex) {
  return knex.schema.createTable('pet_diet', function (t) {
    t.increments('id').primary()
    t.string('food_type')
    t.string('allergies')
    t.string('medication')
    t.string('medication_frequency')
    t.string('flags')
    t.integer('daily_caloric_intake')
    t.integer('pet_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('pet_diet')
}
