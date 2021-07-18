import request from 'superagent'
const contactUrl = '/api/v1/contact/'
const faqUrl = '/api/v1/faq/'
const faqSearchUrl = '/api/v1/faq/search/'
const rootUrl = '/api/v1/'

export function sendContactFormMessage (contactForm) {
  return request.post(contactUrl)
    .send(contactForm)
    .then(res => {
      return null
    })
}
// add error handling

export function getFaqs () {
  return request.get(faqUrl)
    .then(res => {
      return res.body
    })
}

export function getFaqBySearchString (search) {
  return request
    .get(faqSearchUrl + search)
    .then(response => {
      return response.body
    })
}

export function getUserDetails (user) {
  return request.get(rootUrl + '/user')
    .then(res => {
      return res.body
    })
    .catch(e => console.log(e))
}

export function getEvents () {
  return request.get(rootUrl + '/calendar')
    .then(res => {
      return res.body
    })
    .catch(logError)
}

export function createEvent (event) {
  return request
    .post(rootUrl + 'events')
    .send({ event })
    .then(res => {
      return res.body
    })
    .catch(logError)
}

// error function

function logError (err) {
  if (err.message === 'Forbidden') {
    throw new Error('You cannot do that')
  } else {
    // eslint-disable-next-line no-console
    console.error(
      'Error consuming the API (in apis/apiClient.js):',
      err.message
    )
    throw err
  }
}
