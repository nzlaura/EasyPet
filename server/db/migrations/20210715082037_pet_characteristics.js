exports.up = function (knex) {
  return knex.schema.createTable('pet_medical_history', function (t) {
    t.increments('id').primary()
    t.string('food_type')
    t.date('annual_vaccination')
    t.string('flea')
    t.string('worm')
    t.string('additional_vaccination')
    t.integer('pet_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('pet_medical_history')
}
