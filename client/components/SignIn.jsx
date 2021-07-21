import React, { useState } from 'react'

import { login } from '../apis/apiPassport'
import signInImage from '../../server/public/ImageAssets/AnimationOne/FAQVet.png'

function SignIn (props) {
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [wrongAuth, setWrongAuth] = useState(false)

  function showPassword () {
    var x = document.getElementById('passwordinput')
    if (x.type === 'password') {
      x.type = 'text'
    } else {
      x.type = 'password'
    }
  }

  function handleClick (e) {
    e.preventDefault()
    login(loginUsername, loginPassword)
      .then((res) => {
        console.log('res', res)
        if (res === `Successfully Authenticated User:${loginUsername}`) {
          props.history.push('calendar')
          window.location.reload()
        } else setWrongAuth(true)
        return null
      })
      .catch(err => {
        console.log(new Error(err))
      })
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
          <div className='flex items-center grid grid-cols-1 grid-rows-6 w-3/12 h-64' id='signin-form'>
            <p className='text-5xl flex items-left font-bold mb-4 mt-48 ml-20 mb-20 text-black'>Login</p>
            <input className='rounded-md shadow-sm col-1 mt-52 ml-20 mb-10 h-12 p-4' type='text' id='username' name='username' placeholder='Username' onChange={(e) => setLoginUsername(e.target.value)}/>
            <input className='rounded-md shadow-sm col-1 mt-56 ml-20 h-12 p-4' type='password' id='passwordinput' name='passwordinput' placeholder='Password' onChange={(e) => setLoginPassword(e.target.value)}/>
            <label className='col-1 mt-60 ml-20 text-white font-bold' htmlFor ='showPassword'><input className='form-checkbox' type='checkbox' id='showPassword' onClick={showPassword}/> Show Password</label>
            <button className='bg-black hover:bg-gray-900 text-white font-bold rounded-md flex items-center justify-center col-1 h-12 mt-64 w-40 ml-20 transform hover:scale-110 hover:text-green-500' type='submit' onClick={handleClick}>Submit</button>
            <p className="col-1 mt-80 ml-20 mb-10 h-12 text-white text-sm font-bold">Need an account? <a href="#/register"><span onClick={topFunction} className="">Sign Up</span></a></p>
            {wrongAuth && <p className='col-1 mt-96 absolute text-m flex text-black font-extrabold bg-red-600 p-2 max-w-sm h-12 ml-20 mb-10 rounded-lg'>Wrong password or username! <a href="#/login"><span onClick={refreshPage} className="">Please try again.</span></a></p>}
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
