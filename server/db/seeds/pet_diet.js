exports.seed = function (knex) {
  return knex('pet_diet').del()
    .then(function () {
      return knex('pet_diet').insert([
        { id: 100000, allergies: 'nuts', medication: 'vitamin c', medication_frequency: 'every 6 days', flags: '', daily_caloric_intake: 1000, pet_id: 10000 }
      ])
    })
}
