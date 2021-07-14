exports.up = function (knex) {
  return knex.schema.createTable('treatments', function (t) {
    t.increments('id').primary()
    t.string('name')
    t.string('frequency')
    t.boolean('availability')
    t.integer('pet_medical_history_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('treatments')
}
