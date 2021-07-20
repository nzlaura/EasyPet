exports.seed = function (knex) {
  return knex('pet_profile').del()
    .then(function () {
      return knex('pet_profile').insert([
        { id: 10000, name: 'good boy', dob: new Date(2012, 1, 1), type: 'dog', breed: 'english mastiff', gender: 'male', user_name: 'doggolover' },
        { id: 10001, name: 'good girl', dob: new Date(2012, 1, 1), type: 'dog', breed: 'english mastiff', gender: 'female', user_name: 'doggolover' }
      ])
    })
}
