exports.seed = function (knex) {
  return knex('pet_images').del()
    .then(function () {
      return knex('pet_images').insert([
        { id: 101, img_url: 'http://dogurl', pet_id: 10000 }
      ])
    })
}
