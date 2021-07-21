import React from 'react'
import { Link } from 'react-router-dom'

function AllPetProfilesItem (props) {
  const { name, type, breed, gender, dob, id } = props

  return (
    <>
      <Link to={`/user/pets/pet/${id}`}>
        <div className='bg-gray-400 mb-20 ml-20 mt-20 rounded-lg p-4 border-black border-2'>
          <h1 className='bg-black text-white rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2 text-center'>{name}</h1>
          <h2 className='bg-white rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2'>Type: {type}</h2>
          <h2 className='bg-white rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2'>Breed: {breed}</h2>
          <h2 className='bg-white rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2'>Gender: {gender}</h2>
          <h2 className='bg-white rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2'>Date of Birth: {dob}</h2>
          <h2 className='bg-white rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2'>ID: {id}</h2>
        </div>
      </Link>
    </>
  )
}

export default AllPetProfilesItem
