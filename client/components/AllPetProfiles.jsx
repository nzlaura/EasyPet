      import React, { useState, useEffect } from 'react'
      import {Link} from 'react-router-dom'
      import { connect } from 'react-redux'
      import AddPet from './AddPet'
      import { getUser } from '../apis/apiPassport'
      import { getPetsData } from '../apis/apiClient'
      
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
      
        function handleChange (evt) {
          const { name, value } = evt.target
          setData({
            ...data,
            [name]: value
          })
        }
      
        return (
          <>
          <div>
           {data.map(data => {
            return (
          <p key={data.id} name={data.name} dob={data.dob} type={data.type} breed={data.breed} gender={data.gender}></p>
          )
          })}
          </div>
          <div>
            <button className='bg-black hover:bg-gray-900 text-white font-bold text-5xl rounded-md flex items-center justify-center mt-60 mb-60 ml-20 h-32 w-96' type='submit'>
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
      