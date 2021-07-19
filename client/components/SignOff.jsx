import React, { useState } from 'react'
import Axios from 'axios'

function SignOff (props) {

  const logout = () => {
      Axios({
        method: 'GET',
        withCredentials: true,
        url: 'http://localhost:3000/logout'
      }).then((res) => {
        console.log(res)
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
    }

    function handleClick (e) {
      e.preventDefault()
      // const { email, username, password } = form
      return logout()
    }

  return (

    <button className='btn cursor-pointer object-center bg-black hover:bg-gray-900 text-white font-bold rounded-md items-center justify-center col-1 h-8 w-20' onClick={handleClick}> Log Out</button>

  )
}

export default SignOff