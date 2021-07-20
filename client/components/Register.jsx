import React, { useState } from 'react'

import { register } from '../apis/apiPassport'
import signInImage from '../../server/public/ImageAssets/AnimationOne/SignUpWalk.png'

function Register (props) {
  const [registerUsername, setRegisterUsername] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')

  function handleClick (e) {
    e.preventDefault()
    return register(registerUsername, registerPassword) && props.history.push('login')
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
          <form onSubmit={handleClick} className='flex items-center grid grid-cols-1 grid-rows-6 w-3/12 h-64' id='register-form'>
            <p className='text-5xl flex items-left font-bold mb-4 mt-44 ml-20 mb-20 text-black'>Sign Up</p>
            <input className='rounded-md shadow-sm col-1 mt-52 ml-20 mb-10 h-12 w-60 p-4' type='text' id='username' name='username' placeholder='Create Username' onChange={(e) => setRegisterUsername(e.target.value)}/>
            <input className='rounded-md shadow-sm col-1 mt-56 ml-20 h-12 w-60 p-4' type='password' id='passwordinput' name='passwordinput' placeholder='Create Password' onChange={(e) => setRegisterPassword(e.target.value)}/>
            <label className='col-1 mt-60 ml-20 text-white font-bold' htmlFor='showPassword'><input className='form-checkbox' type='checkbox' id='showPassword' onClick={showPassword}/> Show Password</label>
            <button className='bg-black hover:bg-gray-900 text-white font-bold rounded-md flex items-center justify-center col-1 h-12 mt-64 w-40 ml-20' type='submit'>Submit</button>
            <p className="col-1 mt-80 ml-20 mb-10 h-12 text-white text-sm font-bold">Already have an account? <a href="#/login"> Sign in</a></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
