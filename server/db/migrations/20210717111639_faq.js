exports.up = function (knex) {
  return knex.schema.createTable('faq', function (t) {
    t.increments('id').primary()
    t.string('question')
    t.varchar('answer')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('faq')
}
