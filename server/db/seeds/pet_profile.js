exports.seed = function (knex) {
  return knex('pet_profile').del()
    .then(function () {
      return knex('pet_profile').insert([
        { id: 10000, name: 'Good Boy', dob: new Date(2012, 1, 1), type: 'dog', breed: 'english mastiff', gender: 'male', user_name: 'doggolover' },
        { id: 10001, name: 'Good Girl', dob: new Date(2012, 1, 1), type: 'dog', breed: 'english mastiff', gender: 'female', user_name: 'doggolover' },
        { id: 10002, name: 'Aurelius', dob: new Date(2012, 1, 1), type: 'otter', breed: 'sea otter', gender: 'female', user_name: 'sarahIsLive' },
        { id: 10003, name: 'brutus', dob: new Date(2012, 1, 1), type: 'otter', breed: 'sea otter', gender: 'female', user_name: 'sarahIsLive' }
      ])
    })
}
