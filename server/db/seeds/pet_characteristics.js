exports.seed = function (knex) {
  return knex('pet_characteristics').del()
    .then(function () {
      return knex('pet_characteristics').insert([
        { id: 50000, activity: 'high', sleephours: '12h daily', social_human: 'high', social_animal: 'medium-high', pet_id: 10000 }
      ])
    })
}
