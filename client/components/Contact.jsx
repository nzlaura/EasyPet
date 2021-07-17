import React, { useState } from 'react'
import { sendContactFormMessage } from '../apis/apiClient'
import contactImage from '../styles/ImageAssets/AnimationTwo/GroupOne.png'
import signInImage from '../styles/ImageAssets/AnimationOne/FAQVet.png'

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

            <textarea className='rounded-md shadow-sm col-2 mt-52 ml-20' type='text' id='message' name='message' placeholder='  Message'
              required value={contactForm.message} onChange={handleChange}/>

            <button className='bg-black hover:bg-gray-900 text-white font-bold rounded-md flex items-center justify-center col-1 h-12 mt-52 ml-20' type='submit' onClick={handleClick}>Submit</button>

          </form>

          <div className='text-s flex items-center justify-center mb-4'>
            {isSendingMessage && <p>Your message has been sent!</p>}
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact

{ /* <>
<div className='container mx-auto'>

  <p className='text-4xl flex font-bold items-center justify-center mb-4'>Contact Us</p>

  <form className='mx-auto flex items-center grid grid-cols-1 grid-rows-5 w-4/12 h-64' id='contact-form'>

    <input className='rounded-md shadow-sm' type='text' id='name' name='name' placeholder='Name'
      value={contactForm.name} onChange={handleChange}/>

    <input className='rounded-md shadow-sm' type='text' id='email' name='email' placeholder='Email'
      value={contactForm.email} onChange={handleChange}/>

    <input className='rounded-md shadow-sm' type='text' id='subject' name='subject' placeholder='Subject'
      value={contactForm.subject} onChange={handleChange}/>

    <textarea className='rounded-md shadow-sm' type='text' id='message' name='message' placeholder='Leave a message'
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
</> */ }
