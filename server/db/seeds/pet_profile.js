exports.seed = function (knex) {
  return knex('pet_profile').del()
    .then(function () {
      return knex('pet_profile').insert([
        { id: 10000, name: 'good boy', date: new Date(2012, 1, 1), type: 'dog', breed: 'english mastiff', gender: 'female', user_id: 1 }
      ])
    })
}
