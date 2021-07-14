exports.seed = function (knex) {
  return knex('pet_medical_history').del()
    .then(function () {
      return knex('pet_medical_history').insert([
        { id: 88801, annual_vaccination: 'covid', flea: 'on date', worm: 'on date', additional_vaccination: 'covid-19', pet_id: 10000 }
      ])
    })
}
