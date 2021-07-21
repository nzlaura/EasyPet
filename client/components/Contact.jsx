import React, { useState } from 'react'
import { sendContactFormMessage } from '../apis/apiClient'
import contactImage from '../../server/public/ImageAssets/AnimationOne/GroupTwoContactPair.png'

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
      <div className='bg-contain bg-center bg-no-repeat bg-scroll' style={{ backgroundImage: `url(${contactImage})` }}>
        <div className='container mx-auto mb-40'>
          <form className='mx-auto flex items-center justify-center grid grid-cols-1 grid-rows-7 w-5/12' id='contact-form'>
            <p className='text-5xl flex justify-center items-center font-bold mt-12'>Contact Us</p>
            <p className='mx-auto text-s flex justify-center items-center my-4 text-white text-bold'>Send us a message! We would love to hear from you.</p>
            <input className='rounded-md shadow-sm col-1 p-4 mt-8 h-12' type='text' id='name' name='name' placeholder='Name'
              required value={contactForm.name} onChange={handleChange}/>
            <input className='rounded-md shadow-sm col-1 p-4 mt-8 h-12' type='text' id='email' name='email' placeholder='Email'
              required value={contactForm.email} onChange={handleChange}/>
            <input className='rounded-md shadow-sm col-1 p-4 mt-8 h-12' type='text' id='subject' name='subject' placeholder='Subject'
              required value={contactForm.subject} onChange={handleChange}/>
            <textarea className='rounded-md shadow-sm col-1 p-4 mt-8 h-12 resize-none' type='text' id='message' name='message' placeholder='Message'
              required value={contactForm.message} onChange={handleChange}/>
            <button className='transform hover:scale-110 hover:text-green-500 bg-black hover:bg-gray-900 text-white font-bold rounded-md flex items-center justify-center col-1 h-12 mt-8 mb-20 transform hover:scale-110 hover:text-green-500' type='submit' onClick={handleClick}>Submit</button>
          </form>
          {isSendingMessage && <p className='mx-auto text-s flex justify-center items-center -mt-12 mb-20 text-white text-bold'>Your message has been sent! We will be in touch shortly.</p>}
        </div>
      </div>
    </>
  )
}
export default Contact
