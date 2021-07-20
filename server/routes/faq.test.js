const request = require('supertest')
const server = require('../server')

const { getFaqs, getFaqsBySearchString } = require('../db/db')

jest.mock('../db/db')

describe('GET api/v1/faqs', () => {

})
