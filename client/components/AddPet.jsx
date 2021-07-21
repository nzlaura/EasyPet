import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import AddPetBackground from '../../server/public/ImageAssets/AnimationTwo/GroupTwo.png'

function AddPet (props) {
  const initialState = { name: '', dob: '', type: '', breed: '', gender: '' }
  const [data, setData] = useState(initialState)
  const [currentUser, setCurrentUser] = useState('')

  function handleChange (evt) {
    const { name, value } = evt.target
    setData({
      ...data,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    const petdata = data
    props.dispatch(addPet(petdata))
  }

  return (
    <>
      <div className='bg-contain bg-center bg-no-repeat bg-scroll mb-20' style={{ backgroundImage: `url(${AddPetBackground})` }}>
        <div className='container h-screen inline'>
          <p className='text-5xl items-left font-bold mb-5 mt-12 ml-20 text-black'>Add New Pet</p>
          <form className='flex items-center grid grid-cols-1 w-4/12 ml-20' id='profile-form'>
            <label className='mt-2' htmlFor='name'>Name</label>
            <input className='rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2' type='text' id='name' name='name' placeholder='Enter Pet Name' onChange={handleChange}/>
            <label className='mt-2' htmlFor='type'>Animal Type</label>
            <input className='rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2' type='text' id='type' name='type' placeholder='Enter Animal Type (i.e dog, cat)' onChange={handleChange}/>
            <label className='mt-2' htmlFor='breed'>Breed</label>
            <input className='rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2' type='int' id='breed' name='breed' placeholder='Enter Breed' onChange={handleChange}/>
            <label className='mt-2' htmlFor='gender'>Gender</label>
            <input className='rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2' type='text' id='gender' name='gender' placeholder='Enter Gender' onChange={handleChange}/>
            <label className='mt-2' htmlFor='dob'>Date of Birth</label>
            <input className='rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2' type='date' id='dob' name='dob' placeholder='Enter DOB' onChange={handleChange}/>
          </form>
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

export default connect(mapStateToProps)(AddPet)
