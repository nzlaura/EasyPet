const db = require('./db')
const knex = require('knex')
const config = require('./knexfile')
const testDb = knex(config.test)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('getFaqs returns all faqs', () => {
  expect.assertions(1)
  return db.getFaqs(testDb)
    .then((faqs) => {
      expect(faqs).toHaveLength(6)
      return null
    })
    .catch(err => console.log(err))
})

test('getAllEvents returns all events', () => {
  expect.assertions(1)
  return db.getAllEvents(testDb)
    .then((events) => {
      expect(events).toHaveLength(3)
      return null
    })
    .catch(err => console.log(err))
})
