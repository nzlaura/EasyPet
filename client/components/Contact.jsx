import React, { useState } from 'react'
import { sendContactFormMessage } from '../apis/apiClient'
import contactImage from '../styles/ImageAssets/AnimationTwo/GroupOne.png'

function Contact (props) {
  const [isSendingMessage, setIsSendingMessage] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  function handleChange (e) {
    const { name, value } = e.target
    setContactForm({
      ...contactForm,
      [name]: value
    })
  }

  function handleClick (e) {
    e.preventDefault()
    sendContactFormMessage(contactForm)
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setIsSendingMessage(true)
  }

  return (

    <>
      <div className='bg-fixed bg-cover -mt-8' style={{ backgroundImage: `url(${contactImage})` }}>

        <div className='container items-center justify-center mx-auto h-screen'>

          <form className='mx-auto flex items-center justify-center grid grid-cols-1 grid-rows-6 w-5/12 h-96' id='contact-form'>

            <p className='text-5xl flex justify-center items-center font-bold mb-4 mt-52 ml-20 text-black'>Contact Us</p>

            <input className='rounded-md shadow-sm col-1 mt-52 ml-20 h-12' type='text' id='name' name='name' placeholder='  Name'
              value={contactForm.name} onChange={handleChange}/>

            <input className='rounded-md shadow-sm col-1 mt-52 ml-20 h-12' type='text' id='email' name='email' placeholder='  Email'
              value={contactForm.email} onChange={handleChange}/>

            <input className='rounded-md shadow-sm col-1 mt-52 ml-20 h-12' type='text' id='subject' name='subject' placeholder='  Subject'
              value={contactForm.subject} onChange={handleChange}/>

            <textarea className='rounded-md shadow-sm col-2 mt-52 ml-20 resize-none' type='text' id='message' name='message' placeholder='  Message'
              required value={contactForm.message} onChange={handleChange}/>

            <button className='bg-black hover:bg-gray-900 text-white font-bold rounded-md flex items-center justify-center col-1 h-12 mt-52 ml-20' type='submit' onClick={handleClick}>Submit</button>

          </form>

          {isSendingMessage && <p className='text-s flex justify-center items-center mb-4 mt-32 ml-20 text-white text-bold'> Your message has been sent!</p>}

        </div>
      </div>
    </>
  )
}
export default Contact
