      import React, { useState, useEffect } from 'react'
      import {Link} from 'react-router-dom'
      import { connect } from 'react-redux'
      import AddPet from './AddPet'
      import { getUser } from '../apis/apiPassport'
      import { getPetsData } from '../apis/apiClient'
      import AllPetProfilesItem from './AllPetProfilesItem'
      
      function AllPetProfiles (props) {
        const initialState = [{ name: '', dob: '', type: '', breed: '', gender: '', user_name: '' }]
        const [data, setData] = useState(initialState)
        const [currentUser, setCurrentUser] = useState('')
      
        useEffect(() => {
          getUser()
            .then(result => {
              let username = result.username
              setCurrentUser(username)
              getPetsData(username)
              .then(data => {
                setData(data)
                console.log(data)
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
          {/* <div>
            <p className='text-5xl items-left font-bold mb-5 mt-12 ml-20 text-black'>My Pets</p>
            <ul>
              {data.map((data) => (
               <li key={data.id}>
                 <div className='bg-gray-400 mb-20 ml-20 mt-20 w-1/4 rounded-lg p-4 border-black border-2'>
                   <h1 className='bg-black text-white rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2 text-center'>{data.name}</h1>
                   <h2 className='bg-white rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2'>Type: {data.type}</h2>
                   <h2 className='bg-white rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2'>Breed: {data.breed}</h2>
                   <h2 className='bg-white rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2'>Gender: {data.gender}</h2>
                   <h2 className='bg-white rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2'>Date of Birth: {data.dob}</h2>
                </div>
              </li>
           ))}
            </ul>
          </div> */}

        {data.map(data => {
          return (
          <AllPetProfilesItem key={data.id} name={data.name} type={data.type} breed={data.breed} gender={data.gender} dob={data.dob} />
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
      
      function mapStateToProps (state) {
        return {
          user: state.user
        }
      }
      
      export default connect(mapStateToProps)(AllPetProfiles)
      