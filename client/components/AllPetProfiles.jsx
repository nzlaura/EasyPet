      import React, { useState, useEffect } from 'react'
      import {Link} from 'react-router-dom'
      import { connect } from 'react-redux'
      import AddPet from './AddPet'
      import { getUser } from '../apis/apiPassport'
      import { getPetsData } from '../apis/apiClient'
      
      function AllPetProfiles (props) {
        const initialState = { name: '', dob: '', type: '', breed: '', gender: '', user_name: '' }
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
      
        useEffect(() =>{
          getPetsData(currentUser)
            .then(details => {
              setData(details)
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
      
        // function handleSubmit (e) {
        //   e.preventDefault()
        //   const petsdata = data
        //   const username = petsdata.username
        //   props.dispatch(sendUserUpdates(username, userdata))
        // }
      
        return (
          <>

           {/* {data.map(data => {
        return (
          <div key={data.id} data={data.data}></div>
          )
          })} */}
          <div>
            <button className='bg-black hover:bg-gray-900 text-white font-bold text-5xl rounded-md flex items-center justify-center mt-60 ml-20 h-32 w-96' type='submit'>
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
      