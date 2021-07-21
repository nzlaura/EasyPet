import React, { useState, useEffect } from 'react'
// import Axios from 'axios'
import { connect } from 'react-redux'
import AddressFinder from './AddressFinder'
import profileImage from '../../server/public/ImageAssets/AnimationOne/userprofile.png'
import { sendUserUpdates } from '../actions/index'
import { getUser } from '../apis/apiPassport'
import { getUserData } from '../apis/apiClient'

function UserProfile (props) {
  const initialState = { username: '', email: '', phone: '', firstname: '', lastname: '', dob: '', address: '' }
  const [data, setData] = useState(initialState)
  const [currentUser, setCurrentUser] = useState('')


  useEffect(() => {
    getUser()
      .then(result => {
        let username = result.username
        setCurrentUser(username)
        getUserData(username)
        .then(data => {
          setData(data)
          return null
        })
        return null
      })
      .catch(err => {
        console.log(err.message)
        return null
      })
  }, [])

  function handleChange (evt) {
    const { name, value } = evt.target
    setData({
      ...data,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    const userdata = data
    const username = userdata.username
    props.dispatch(sendUserUpdates(username, userdata))
  }

  return (
    <>
      <div className='bg-contain bg-center bg-no-repeat bg-scroll mb-20' style={{ backgroundImage: `url(${profileImage})` }}>
        <div className='container h-screen inline'>
          <p className='text-5xl items-left font-bold mb-5 mt-12 ml-20 text-black'>User Profile</p>
          <form className='flex items-center grid grid-cols-1 w-4/12 ml-20' id='profile-form'>
            <p className='text-2xl items-left font-bold text-white'>Account Details:</p>
            <label className='mt-2' htmlFor='username'>Username</label>
            <input className='rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2' type='text' id='username' name='username' placeholder='Enter Username' value={data.username} onChange={handleChange}/>
            <label className='mt-2' htmlFor='email'>Email</label>
            <input className='rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2' type='text' id='email' name='email' placeholder='Enter Email Address' value={data.email} onChange={handleChange}/>
            <label className='mt-2' htmlFor='phone'>Phone Number</label>
            <input className='rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2' type='int' id='phone' name='phone' placeholder='Enter Phone Number' value={data.phone} onChange={handleChange}/>
            <p className='text-2xl items-left font-bold text-white mt-4'>Personal Details:</p>
            <label className='mt-2' htmlFor='firstname'>First Name</label>
            <input className='rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2' type='text' id='firstName' name='firstname' placeholder='Enter First Name' value={data.firstname} onChange={handleChange}/>
            <label className='mt-2' htmlFor='lastname'>Last Name</label>
            <input className='rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2' type='text' id='lastName' name='lastname' placeholder='Enter Last Name' value={data.lastname} onChange={handleChange}/>
            <label className='mt-2' htmlFor='dob'>Date of Birth</label>
            <input className='rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2' type='date' id='dob' name='dob' placeholder='Enter DOB' value={data.dob} onChange={handleChange}/>
          </form>
          <AddressFinder/>
          <button className='btn bg-black hover:bg-gray-900 text-white font-bold rounded-md items-center justify-center col-1 h-12 w-1/3 ml-20 mt-2 mb-2' onClick={handleSubmit} type="submit" name="next"> Submit Updates </button>
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
