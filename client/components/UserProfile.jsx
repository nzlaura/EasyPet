import React, { useState } from 'react'
import { connect } from 'react-redux'
import AddressFinder from './AddressFinder'
import profileImage from '../styles/ImageAssets/AnimationOne/TwoDogs.png'

function UserProfile (props) {
  const {userName, updateUserName} = useState('')
  const {email, updateEmail} = useState('')
  const {phoneNumber, updatePhoneNumber} = useState('')
  const {firstName, updateFirstName} = useState('')
  const {lastName, updateLastName} = useState('')
  const {dob, updateDob} = useState('')
  
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
     <div className='bg-scroll bg-cover' style={{ backgroundImage: `url(${profileImage})` }}>
     <div className='container h-screen'>
      <p className='text-5xl items-left font-bold mb-5 ml-20 text-white'>User Profile</p>
      <p className='text-2xl items-left font-bold text-white'>Account Details:</p>
      <form className='flex items-center grid grid-cols-1 grid-rows-6 w-3/12 h-64' id='profile-form'>
        <label for='username'>Username</label>
        <input className='rounded-md shadow-sm col-1 h-12' type='text' id='username' name='username' placeholder='Enter Username' onChange={(e) => updateUserName(e.target.value)}/>
        <label for='email' className=''>Email</label>
        <input className='rounded-md shadow-sm col-1 h-12' type='text' id='email' name='email' placeholder='Enter Email Address' onChange={(e) => updateEmail(e.target.value)}/>      
        <label for='phone' className=''>Phone Number</label>
        <input className='rounded-md shadow-sm col-1 h-12' type='int' id='phone' name='phone' placeholder='Enter Phone Number' onChange={(e) => updatePhoneNumber(e.target.value)}/>      
      </form>
      <form className='flex items-center grid grid-cols-1 grid-rows-1 w-3/12'>
        <label for='passwordinput' className=''>Update Password</label>
        <input className='rounded-md shadow-sm col-1 h-12' type='password' id='passwordinput' name='passwordinput' placeholder='Enter New Password' onChange={(e) => updatePassword(e.target.value)}/>
        <label className='' htmlFor='showPassword'>
        <input className='form-checkbox col-1' type='checkbox' id='showPassword' onClick={showPassword}/>
        <span className='ml-2 col-1 text-white'>Show password</span>
        </label>
      </form>
      <p className='text-2xl items-left font-bold text-white'>Personal Details:</p>
      <form className='flex items-center grid grid-cols-1 grid-rows-6 w-3/12 h-64 mb-10' id='profile-form'>
        <label className=''>First Name</label>
        <input className='rounded-md shadow-sm col-1 h-12' type='text' id='firstName' name='firstName' placeholder='Enter First Name' onChange={(e) => updateFirstName(e.target.value)}/>
        <label className=''>Last Name</label>
        <input className='rounded-md shadow-sm col-1 h-12' type='text' id='lastName' name='lastName' placeholder='Enter Last Name' onChange={(e) => updateLastName(e.target.value)}/>      
        <label className=''>Date of Birth</label>
        <input className='rounded-md shadow-sm col-1 h-12' type='date' id='dob' name='dob' placeholder='Enter DOB' onChange={(e) => updateDob(e.target.value)}/>
      </form>
      <div>
      <AddressFinder/>
      </div>
      </div>
    </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserProfile)