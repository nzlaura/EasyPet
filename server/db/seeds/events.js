exports.seed = function (knex) {
  return knex('events').del()
    .then(function () {
      return knex('events').insert([
        { id: 1, title: 'Vaccination', type: 'Treatment', date: '2021-07-15T20:58:02.360Z', pet_id: '', user_id: '' },
        { id: 2, title: 'Flea Treatment', type: 'Treatment', date: '2021-07-13T20:58:02.360Z', pet_id: '', user_id: '' },
        { id: 3, title: 'Worm Treatment', type: 'Treatment', date: '2021-07-16T20:58:02.360Z', pet_id: '', user_id: '' },
        { id: 4, title: 'Vet Appointment', type: 'Appointment', date: '2021-07-19T20:58:02.360Z', pet_id: '', user_id: '' },
        { id: 5, title: 'Groomer Appointment', type: 'Appointment', date: '2021-07-03T20:58:02.360Z', pet_id: '', user_id: '' },
        { id: 6, title: 'Pet Care Appointment', type: 'Appointment', date: '2021-07-29T20:58:02.360Z', pet_id: '', user_id: '' }
      ])
    })
}
