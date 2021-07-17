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
      <div className='container mx-auto'>

        <p className='text-4xl flex items-center justify-center mb-4'>Contact Us</p>

        <form className='mx-auto flex items-center grid grid-cols-1 grid-rows-5 w-4/12 h-64' id='contact-form'>

          <input className='rounded-md shadow-sm' type='text' id='name' name='name' placeholder='Name'
            value={contactForm.name} onChange={handleChange}/>

          <input className='rounded-md shadow-sm' type='text' id='email' name='email' placeholder='Email'
            value={contactForm.email} onChange={handleChange}/>

          <input className='rounded-md shadow-sm' type='text' id='subject' name='subject' placeholder='Subject'
            value={contactForm.subject} onChange={handleChange}/>

          <input className='rounded-md shadow-sm' type='text' id='message' name='message' placeholder='Leave a message'
            required value={contactForm.message} onChange={handleChange}/>

          <button className='bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mx-auto flex items-center w-2/12 h-auto' type='submit' onClick={handleClick}>Submit</button>

        </form>

        <div className='text-s flex items-center justify-center mb-4'>
          {isSendingMessage && <p>Your message has been sent!</p>}
        </div>

        <div className='mx-auto flex items-center justify-center'>
          <img src={contactImage} width='900 px' height= 'auto'/>
        </div>

      </div>
    </>
  )
}
export default Contact
