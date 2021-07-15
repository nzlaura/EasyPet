import React, { useState } from 'react'
import { sendContactFormMessage } from '../apis/apiClient'

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
    // setTimeout(() => props.history.push('/'), 3000)
  }

  return (
    <>
      <div>
        <div>
          <ul><h1>Contact</h1></ul>
          <ul><form id="contact-form">
            <input type='text' id='name' name='name' placeholder='Name'
              value={contactForm.name} onChange={handleChange}/>
            <br></br>
            <input type='text' id='email' name='email' placeholder='Email'
              value={contactForm.email} onChange={handleChange}/>
            <br></br>
            <input type='text' id='subject' name='subject' placeholder='Subject'
              value={contactForm.subject} onChange={handleChange}/>
            <br></br>
            <input type='text' id='message' name='message' placeholder='Leave a message'
              rows='1' required value={contactForm.message} onChange={handleChange}/>
            <br></br>
            <button type='submit' className='submit-button' onClick={handleClick}>Submit</button>
          </form>
          {isSendingMessage && <p>Your message has been sent!</p>}
          </ul>
        </div>
      </div>
    </>
  )
}
export default Contact
