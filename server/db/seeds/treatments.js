exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('treatments').del()
    .then(function () {
      // Inserts seed entries
      return knex('treatments').insert([
        { id: 1011, name: 'arthritis_treatment', frequency: 'daily maintenance', availability: true, pet_medical_history_id: 88801 }
      ])
    })
}
