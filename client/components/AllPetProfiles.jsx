import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import AddPet from './AddPet'
import { getUser } from '../apis/apiPassport'
import { getPetsData } from '../apis/apiClient'
import AllPetProfilesItem from './AllPetProfilesItem'

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
      {data.map((data, i) => {
        return (
          <AllPetProfilesItem key={i} name={data.name} type={data.type} breed={data.breed} gender={data.gender} dob={data.dob} id={data.id}/>
        )
      })}

      <div>
        <button className='bg-black hover:bg-gray-900 text-white font-bold rounded-md flex items-center justify-center mt-10 mb-10 ml-20 h-10 w-40' type='submit'>
          <a href="#/user/pets/addpet">Add Pet</a>
        </button>
      </div>
    </>
  )
}

export default AllPetProfiles
