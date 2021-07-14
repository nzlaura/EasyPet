// import nock from 'nock'

// import { getNewPassword } from './index'

// describe('getNewPassword works', () => {
//   const email = 'bomb@bomb.com'
//   const scope = nock('http://localhost')
//     .post('/api/v1/resetpassword', { email })
//     .reply(201)

//   test('getNewEmail is POSTING an email address to api/v1/resetpassword', () => {
//     expect.assertions(3)

//     return getNewPassword(email)
//       .then((response) => {
//         expect(response).toBe('bomb@bomb.com')
//         expect(response.status).toEqual(201)
//         expect(scope.isDone()).toBe(true)
//         return null
//       })
//   })
// })

// // is changePassword POSTING strings (password and token) to api/v1/changepassword
// // expect: mock password = mock password AND mock token = mock token
