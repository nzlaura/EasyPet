import React, { useState } from 'react'
import { baseApiUrl as baseUrl } from '../config'

function Register (props) {
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: ''
  })

  const hideError = () => {
    setError('')
  }

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
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

  return (
    <>
      <h2>Register</h2>
      <div data-testid='error' onClick={hideError}>
        { error && `Error: ${error}` }
      </div>
      <form data-testid='form' onSubmit={handleClick}>
        <label htmlFor='email'>Email: </label>
        <input type='text' required
          id='email'
          name='email'
          placeholder='add new email'
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor='username'>Username: </label>
        <input type='text' required
          id='username'
          name='username'
          placeholder='add new username'
          value={form.username}
          onChange={handleChange} />
        <label htmlFor='password'>Password: </label>
        <input type='password' required
          id='password'
          name='password'
          placeholder='create a password'
          value={form.password}
          onChange={handleChange}
          // autocomplete='new-password'
        />
        <button type='submit' data-testid='register' onClick={handleClick}>Register</button>
      </form>
    </>
  )
}

export default Register