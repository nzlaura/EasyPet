import React, { useState } from 'react'
import Axios from 'axios'

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

  function showPassword() {
    var x = document.getElementById("passwordinput");
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  }

  return (
    <>
      <div>
        <h1>Register</h1>
        <input placeholder="username" onChange={(e) => setRegisterUsername(e.target.value)}/>
        <input type='password' id='passwordinput' placeholder="password" onChange={(e) => setRegisterPassword(e.target.value)}/>
        <input type="checkbox" onClick={showPassword}/>Show Password
        <button onClick={register}>Submit</button>
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