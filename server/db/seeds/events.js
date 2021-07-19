exports.seed = function (knex) {
  return knex('events').del()
    .then(function () {
      return knex('events').insert([
        { id: 1, title: 'Vaccination', type: 'Treatment', date: '12:30', pet_id: '' },
        { id: 2, title: 'Flea Treatment', type: 'Treatment', date: '9:00', pet_id: '' },
        { id: 3, title: 'Worm Treatment', type: 'Treatment', date: '', pet_id: '' },
        { id: 4, title: 'Vet Appointment', type: 'Appointment', date: '', pet_id: '' },
        { id: 5, title: 'Groomer Appointment', type: 'Appointment', date: '', pet_id: '' },
        { id: 6, title: 'Pet Care Appointment', type: 'Appointment', date: '', pet_id: '' }
      ])
    })
}
