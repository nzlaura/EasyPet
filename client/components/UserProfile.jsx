import React, { useState } from 'react'
import { connect } from 'react-redux'
import intlTelInput from 'intl-tel-input';

function UserProfile (props) {
  //Create div and elements
  //gather from state the logged in user
  //map the users details into the props
  //Create functions for onchange
  //Create functions for onclick to update DB
    const phoneInputField = document.selectElementById('phone');
    const phoneInput = intlTelInput(phoneInputField, {
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    const info = document.querySelector(".alert-info");

    function process(event) {
    event.preventDefault();

    const phoneNumber = phoneInput.getNumber();

    info.style.display = "";
    info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
    }

  return (
    <>
    <div>
      <p className='text-5xl items-left font-bold mb-4 mt-52 ml-20 mb-20 text-white'>User Profile</p>
      <p className='text-2xl items-left font-bold mb-4 mt-52 ml-20 mb-20 text-white'>EasyPet Account Details:</p>
      <form className='' id='profile-form'>
        <label className=''>Username</label>
        <input className='rounded-md shadow-sm col-1 mt-52 ml-20 mb-10 h-12' type='text' id='username' name='username' placeholder='Enter Username' onChange={(e) => updateUserName(e.target.value)}/>
        <label className=''>Email</label>
        <input className='rounded-md shadow-sm col-1 mt-52 ml-20 mb-10 h-12' type='text' id='email' name='email' placeholder='Enter Email Address' onChange={(e) => updateEmail(e.target.value)}/>      
        <label className=''>Phone Number</label>
        <input className='rounded-md shadow-sm col-1 mt-52 ml-20 mb-10 h-12' type='int' id='email' name='email' placeholder='Enter Email Address' onChange={(e) => updatePhoneNumber(e.target.value)}/>      
        <div class="alert alert-info" style="display: none;"></div>   
      </form>
      <form id="login" onsubmit="process(event)">
        <p>Enter your phone number:</p>
        <input id="phone" type="tel" name="phone" />
        <input type="submit" class="btn" value="Verify" />
        </form>
      <p className='text-2xl items-left font-bold mb-4 mt-52 ml-20 mb-20 text-white'>Personal Details:</p>
      <form className='' id='profile-form'>
        <label className=''>First Name</label>
        <input className='rounded-md shadow-sm col-1 mt-52 ml-20 mb-10 h-12' type='text' id='firstName' name='firstName' placeholder='Enter First Name' onChange={(e) => updateFirstName(e.target.value)}/>
        <label className=''>Last Name</label>
        <input className='rounded-md shadow-sm col-1 mt-52 ml-20 mb-10 h-12' type='text' id='lastName' name='lastName' placeholder='Enter Last Name' onChange={(e) => updateLastName(e.target.value)}/>      
        <label className=''>Date of Birth</label>
        <input className='rounded-md shadow-sm col-1 mt-52 ml-20 mb-10 h-12' type='date' id='dob' name='dob' placeholder='Enter DOB' onChange={(e) => updateDob(e.target.value)}/>
      </form>
    </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserProfile)