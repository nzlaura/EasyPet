import request from 'superagent'
const contactUrl = '/api/v1/contact/'

export function sendContactFormMessage (contactForm) {
  return request.post(contactUrl)
    .send(contactForm)
    .then(res => {
      return null
    })
}
// add error handling
