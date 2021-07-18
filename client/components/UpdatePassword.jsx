import React from 'react';

function UpdatePassword () {


  function showPassword () {
    var x = document.getElementById('passwordinput')
    if (x.type === 'password') {
      x.type = 'text'
    } else {
      x.type = 'password'
    }
  }

  return (
    <form className='flex items-center grid grid-cols-1 grid-rows-1 w-3/12'>
    <label for='passwordinput' className=''>Update Password</label>
    <input className='rounded-md shadow-sm col-1 h-12' type='password' id='passwordinput' name='passwordinput' placeholder='Enter New Password' onChange={(e) => updatePassword(e.target.value)}/>
    <label className='' htmlFor='showPassword'>
    <input className='form-checkbox col-1' type='checkbox' id='showPassword' onClick={showPassword}/>
    <span className='ml-2 col-1 text-white'>Show password</span>
    </label>
  </form>
  )
}

export default UpdatePassword