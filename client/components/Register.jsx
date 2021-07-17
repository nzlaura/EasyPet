import React, { useState } from 'react'
import Axios from 'axios'

import signInImage from '../styles/ImageAssets/AnimationOne/SignUpWalk.png'

function Register (props) {
  const [registerUsername, setRegisterUsername] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [error, setError] = useState('')

  const hideError = () => {
    setError('')
  }

  const register = () => {
    Axios({
      method: 'POST',
      data: {
        username: registerUsername,
        password: registerPassword
      },
      withCredentials: true,
      url: 'http://localhost:3000/register'
    }).then((res) => console.log(res))
      .catch(err => console.log(err.message))
  }

  function handleClick (e) {
    e.preventDefault()
    const { email, username, password } = form
    return register({ email, username, password }, { baseUrl })
      .then((token) => {
        if (isAuthenticated()) {
          props.history.push('/')
        }
        return null
      })
      .catch(err => {
        if (err.message === 'USERNAME_UNAVAILABLE') {
          setError('Username is not available')
        }
        if (err.message === 'EMAIL_UNAVAILABLE') {
          setError('Email is not available')
        }
      })
  }

  function showPassword () {
    var x = document.getElementById('passwordinput')
    if (x.type === 'password') {
      x.type = 'text'
    } else {
      x.type = 'password'
    }
  }

  return (
    <>
      <div className='bg-fixed bg-cover' style={{ backgroundImage: `url(${signInImage})` }}>

        <div className='container mx-auto h-screen'>

          <p className='text-4xl flex items-center justify-center mb-4'>Register</p>

          <form className='mx-auto flex items-center grid grid-cols-1 grid-rows-5 w-4/12 h-64' id='register-form'>

            <input className='rounded-md shadow-sm' type='text' id='username' name='username' placeholder='username' onChange={(e) => setRegisterUsername(e.target.value)}/>

            <input className='rounded-md shadow-sm' type='password' id='passwordinput' name='passwordinput' placeholder="password" onChange={(e) => setRegisterPassword(e.target.value)}/>

            <label className='inline-flex items-center' htmlFor='showPassword'>
              <input className='form-checkbox' type='checkbox' id='showPassword' onClick={showPassword}/>
              <span className='ml-2'>Show password</span>
            </label>

            <button className='bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mx-auto flex items-center w-2/12 h-auto' type='submit' onClick={register}>Submit</button>
          </form>

        </div>
      </div>

      {/* <div className='bg-fixed' >
        <img src={signInImage}/>
      </div> */}
    </>
  )
}

export default Register

// <>
//       <h2>Register</h2>
//       <div data-testid='error' onClick={hideError}>
//         { error && `Error: ${error}` }
//       </div>
//       <form data-testid='form' onSubmit={handleClick}>
//         <label htmlFor='email'>Email: </label>
//         <input type='text' required
//           id='email'
//           name='email'
//           placeholder='add new email'
//           value={form.email}
//           onChange={handleChange}
//         />
//         <label htmlFor='username'>Username: </label>
//         <input type='text' required
//           id='username'
//           name='username'
//           placeholder='add new username'
//           value={form.username}
//           onChange={handleChange} />
//         <label htmlFor='password'>Password: </label>
//         <input type='password' required
//           id='password'
//           name='password'
//           placeholder='create a password'
//           value={form.password}
//           onChange={handleChange}
//           // autocomplete='new-password'
//         />
//         <button type='submit' data-testid='register' onClick={handleClick}>Register</button>
//       </form>
//     </>
