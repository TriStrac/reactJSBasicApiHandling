import React from 'react'
import './LoginSignUp.css'

export const SignUp = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
    </div>
        <div className="inputs">
            <div className='input'>
                <input type="email" placeholder='Email'/>
            </div>
            <div className='input'>
                <input type="password" placeholder='Password'/>
            </div>
            <div className='input'>
                <input type="text" placeholder='First Name'/>
            </div>
            <div className='input'>
                <input type="text" placeholder='Middle Name'/>
            </div>
            <div className='input'>
                <input type="text" placeholder='Last Name'/>
            </div>
            <div className='input'>
                <input type="date" placeholder='Birth Date'/>
            </div>
            <div className='input'>
                <input type="text" placeholder='Street'/>
            </div>
            <div className='input'>
                <input type="text" placeholder='Barangay'/>
            </div>
            <div className='input'>
                <input type="text" placeholder='Province'/>
            </div>
            <div className='input'>
                <input type="text" placeholder='City'/>
            </div>
            <div className='input'>
                <input type="text" placeholder='Type'/>
            </div>
            <div className='submit'>Sign Up</div>
        </div>
    </div>
    
  )
}
