import React, { useState } from 'react'
import Axios from 'axios'

import signInImage from '../../server/public/ImageAssets/AnimationOne/SignUpWalk.png'

function Register (props) {
  const [registerUsername, setRegisterUsername] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [error, setError] = useState('')

  const hideError = () => {
    setError('')
  }
  // needs to be passed an event and call preventDefault
  const register = () => {
  // using axios is fine but move it into it's own apiClient file
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
  // if you aren't going to use this function delete it
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
      <div className='bg-scroll bg-cover' style={{ backgroundImage: `url(${signInImage})` }}>
        <div className='container h-screen'>
          <form className='flex items-center grid grid-cols-1 grid-rows-6 w-3/12 h-64' id='register-form'>
            <p className='text-5xl flex items-left font-bold mb-4 mt-44 ml-20 mb-20 text-black'>Sign Up</p>
            <input className='rounded-md shadow-sm col-1 mt-52 ml-20 mb-10 h-12 w-60 p-4' type='text' id='username' name='username' placeholder='Create Username' onChange={(e) => setRegisterUsername(e.target.value)}/>
            <input className='rounded-md shadow-sm col-1 mt-56 ml-20 h-12 w-60 p-4' type='password' id='passwordinput' name='passwordinput' placeholder='Create Password' onChange={(e) => setRegisterPassword(e.target.value)}/>
            <label className='col-1 mt-60 ml-20 text-white font-bold' htmlFor='showPassword'><input className='form-checkbox' type='checkbox' id='showPassword' onClick={showPassword}/> Show Password</label>
            <button className='bg-black hover:bg-gray-900 text-white font-bold rounded-md flex items-center justify-center col-1 h-12 mt-64 w-40 ml-20' type='submit' onClick={register}>Submit</button>
            <p className="col-1 mt-80 ml-20 mb-10 h-12 text-white text-sm font-bold">Already have an account? <a href="#/login"> Sign in</a></p>
          </form>
        </div>
      </div>
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
