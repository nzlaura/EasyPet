exports.seed = function (knex) {
  return knex('faq').del()
    .then(function () {
      return knex('faq').insert([
        { id: 1, question: 'How much does EasyPet cost?', answer: 'EasyPet is 100% free to all users.' },
        { id: 2, question: 'Is this going to create more work for me?', answer: 'We hope not! EasyPet is designed to simplify and streamline your pet care needs. We hope you enjoy using it.' },
        { id: 3, question: 'How do I sign up to EasyPet?', answer: 'Please visit our registration page to begin the signup process.' },
        { id: 4, question: 'Who is the EasyPet team?', answer: 'We are a small team of pet enthusiasts who also happen to be junior web developers. EasyPet is an almagmation of those interests.' },
        { id: 5, question: 'Is EasyPet owned by a big international company?', answer: 'Far from it! EasyPet is a New Zealand based company. Each team member is based in the North Island of New Zealand.' },
        { id: 6, question: 'How do I contact the team at EasyPet?', answer: 'We would love to hear from you! The best way to contact us is via our contact page.' }
      ])
    })
}
