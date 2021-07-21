import React, { useState } from 'react'

import { register } from '../apis/apiPassport'
import signInImage from '../../server/public/ImageAssets/AnimationOne/SignUpWalk.png'

function Register (props) {
  const [registerUsername, setRegisterUsername] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [wrongAuth, setWrongAuth] = useState(false)

  function handleClick (e) {
    e.preventDefault()
    return register(registerUsername, registerPassword)
      .then((res) => {
        console.log('register', res)
        if (res === 'User already taken') {
          setWrongAuth(true)
        } else props.history.push('login')
        return null
      })
      .catch(err => {
        console.log(new Error(err))
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

  function topFunction () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

  }

  function refreshPage () {
    reload = location.reload();
}

  return (
    <>
      <div className='bg-scroll bg-cover' style={{ backgroundImage: `url(${signInImage})` }}>
        <div className='container h-screen'>
          <form onSubmit={handleClick} className='flex items-center grid grid-cols-1 grid-rows-6 w-3/12 h-64' id='register-form'>
            <p className='text-5xl flex items-left font-bold mb-4 mt-44 ml-20 mb-20 text-white'>Sign Up</p>
            <input className='rounded-md shadow-sm col-1 mt-52 ml-20 mb-10 h-12 w-60 p-4' type='text' id='username' name='username' placeholder='Create Username' onChange={(e) => setRegisterUsername(e.target.value)}/>
            <input className='rounded-md shadow-sm col-1 mt-56 ml-20 h-12 w-60 p-4' type='password' id='passwordinput' name='passwordinput' placeholder='Create Password' onChange={(e) => setRegisterPassword(e.target.value)}/>
            <label className='col-1 mt-60 ml-20 text-white font-bold' htmlFor='showPassword'><input className='form-checkbox' type='checkbox' id='showPassword' onClick={showPassword}/> Show Password</label>
            <button className='bg-black hover:bg-gray-900 text-white font-bold rounded-md flex items-center justify-center col-1 h-12 mt-64 w-40 ml-20 transform hover:scale-110 hover:text-green-500' type='submit'>Submit</button>
            <p className="col-1 mt-80 ml-20 mb-10 h-12 text-white text-sm font-bold">Already have an account? <a href="#/login"> <span onClick={topFunction} className="">Login</span></a></p>
            {wrongAuth && <p className='col-1 mt-96 absolute text-m flex text-black font-extrabold bg-red-600 p-2 max-w-sm h-12 ml-20 mb-10 rounded-lg'><a href="#/register"><span onClick={refreshPage} className="">User already taken, make a better choice.</span></a></p>}
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
