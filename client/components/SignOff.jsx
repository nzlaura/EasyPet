import React, { useState } from 'react'
import Axios from 'axios'

function SignOff (props) {

  const logoff = () => {
    Axios({
      method: 'POST',
      data: {
        username: loginUsername,
        password: loginPassword
      },
      withCredentials: true,
      url: 'http://localhost:3000/logoff'
    }).then((res) => console.log(res))
      .catch(err => console.log(err.message))
  }

  return (

  )
}