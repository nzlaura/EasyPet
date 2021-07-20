import React, { useState } from 'react'
import { signOff } from '../apis/apiPassport'

function SignOff (props) {
  function handleClick (e) {
    e.preventDefault()
    // const { email, username, password } = form
    return signOff()
  }

  return (
    <button className='btn cursor-pointer object-center bg-black hover:bg-gray-900 text-white font-bold rounded-md items-center justify-center col-1 h-8 w-20' onClick={handleClick}> Log Out</button>
  )
}

export default SignOff
