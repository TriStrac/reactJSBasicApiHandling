import React, { useState } from 'react'
import './LoginSignUp.css'

export const Login = () => {
    const[email, setEmail] = useState('')
    const[password,setPassword] = useState('')

    function loginUser(){
        alert(`${email}: ${password}`)
    }

    function getEmail(val){
        setEmail(val.target.value)
    }
    function getPassword(val){
        setPassword(val.target.value)
    }
    
  return (
    <div className="container">
        <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className='input'>
                <input type="email" placeholder='Email' onChange={getEmail}/>
            </div>
            <div className='input'>
                <input type="password" placeholder='Password' onChange={getPassword}/>
            </div>
            
            <div className='submit' onClick={loginUser}>Login</div>
        </div>
    </div>
    
  )
}
