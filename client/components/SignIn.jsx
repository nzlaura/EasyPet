import React, { useState } from 'react'
import Axios from 'axios'

import signInImage from '../styles/ImageAssets/AnimationOne/FAQVet.png'

function SignIn (props) {
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [data, setData] = useState('')
  const login = () => {
    Axios({
      method: 'POST',
      data: {
        username: loginUsername,
        password: loginPassword
      },
      withCredentials: true,
      url: 'http://localhost:3000d/login'
    }).then((res) => console.log(res))
      .catch(err => console.log(err.message))
  }
  const getUser = () => {
    Axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:3000/user'
    }).then((res) => {
      setData(res.data)
      console.log(res.data)
      return null
    })
      .catch(err => console.log(err.message))
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
        <div className='container h-screen'>
          <form className='flex items-center grid grid-cols-1 grid-rows-5 w-3/12 h-64' id='signin-form'>
            <p className='text-5xl flex items-left font-bold mb-4 mt-52 ml-20 mb-20 text-black'>Login</p>
            <input className='rounded-md shadow-sm col-1 mt-52 ml-20 mb-10 h-12' type='text' id='username' name='username' placeholder='  Enter Username' onChange={(e) => setLoginUsername(e.target.value)}/>
            <input className='rounded-md shadow-sm col-1 mt-52 ml-20 h-12' type='password' id='passwordinput' name='passwordinput' placeholder='  Enter Password' onChange={(e) => setLoginPassword(e.target.value)}/>
            <label className='inline-flex items-center' htmlFor='showPassword'>
              <input className='form-checkbox col-1 mt-52 ml-20' type='checkbox' id='showPassword' onClick={showPassword}/>
              <span className='ml-2 col-1 mt-52 text-black'>Show password</span>
            </label>
            <button className='bg-black hover:bg-gray-900 text-white font-bold rounded-md flex items-center justify-center col-1 h-12 mt-52 ml-20' type='submit' onClick={login}>Submit</button>
          </form>
        </div>
      </div>

      {/* <p className="text-4xl flex items-center justify-center mb-4">Get User</p>

      <button className='bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mx-auto flex items-center w-2/12 h-auto' type='submit' onClick={getUser}>Submit</button>

      <div className='text-s flex items-center justify-center mb-4'>
        {data.username ? <h1>Welcome Back {data.username}</h1> : null}
      </div> */}

    </>
  )
}

export default SignIn
