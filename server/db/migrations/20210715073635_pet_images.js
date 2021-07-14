exports.up = function (knex) {
  return knex.schema.createTable('pet_images', function (t) {
    t.increments('id').primary()
    t.string('img_url').unique()
    t.integer('pet_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('pet_images')
}
