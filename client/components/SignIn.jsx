
import React, { useState } from 'react'
import Axios from 'axios'

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

  function showPassword() {
    var x = document.getElementById("passwordinput")
    if (x.type === 'password') {
      x.type = 'text'
    } else {
      x.type = 'password'
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input type='password' id='passwordinput' placeholder="password" onChange={(e) => setLoginPassword(e.target.value)}/>
        <input type="checkbox" onClick={showPassword}/>Show Password
        <button onClick={login}>Submit</button>
      </div>
      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {data.username ? <h1>Welcome Back {data.username}</h1> : null}
      </div>
    </div>
  )
}

export default SignIn