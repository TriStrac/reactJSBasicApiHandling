import React from 'react'
import './LoginSignUp.css'

export const Login = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
    </div>
        <div className="inputs">
            <div className='input'>
                <input type="email" placeholder='Email'/>
            </div>
            <div className='input'>
                <input type="password" placeholder='Password'/>
            </div>
            
            <div className='submit'>Login</div>
        </div>
    </div>
    
  )
}
