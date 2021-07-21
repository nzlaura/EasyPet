import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import AddPet from './AddPet'
import { getUser } from '../apis/apiPassport'
import { getPetsData } from '../apis/apiClient'
import AllPetProfilesItem from './AllPetProfilesItem'
import backgroundImage from '../../server/public/ImageAssets/AnimationTwo/GroupOneContact.png'

function AllPetProfiles (props) {
  const initialState = [{ name: '', dob: '', type: '', breed: '', gender: '', user_name: '', id: '' }]
  const [data, setData] = useState(initialState)

  useEffect(() => {
    getUser()
      .then(result => {
        const username = result.username
        getPetsData(username)
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

  return (
    <>
       <div className='bg-contain bg-center bg-no-repeat bg-scroll height-100%' style={{ backgroundImage: `url(${backgroundImage})` }}>
       <div className='container h-screen inline mt-12'>
          <p className='text-5xl items-left font-bold mb-5 mt-12 ml-20 text-black'>Pet Profile</p>
      {data.map((data, i) => {
        return (
          <AllPetProfilesItem className='flex flex-row' key={i} name={data.name} type={data.type} breed={data.breed} gender={data.gender} dob={data.dob} id={data.id}/>
        )
      })}

      <div>
        <button className='transform hover:scale-110 hover:text-green-500 bg-black hover:bg-gray-900 text-white font-bold rounded-md flex items-center justify-center mt-10 mb-10 ml-20 h-10 w-40' type='submit'>
          <a href="#/user/pets/addpet">Add Pet</a>
        </button>
      </div>
      </div>
      </div>
    </>
  )
}

export default AllPetProfiles
