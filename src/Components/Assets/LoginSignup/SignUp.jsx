import React, { useState } from 'react';
import './LoginSignUp.css';

export const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        middleName: '',
        lastName: '',
        birthDate: '',
        street: '',
        barangay: '',
        province: '',
        city: '',
        type: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        // Add your form submission logic here
        alert(JSON.stringify(formData, null, 2));
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className='input'>
                    <input type="email" name="email" placeholder='Email' onChange={handleChange} />
                </div>
                <div className='input'>
                    <input type="password" name="password" placeholder='Password' onChange={handleChange} />
                </div>
                <div className='input'>
                    <input type="text" name="firstName" placeholder='First Name' onChange={handleChange} />
                </div>
                <div className='input'>
                    <input type="text" name="middleName" placeholder='Middle Name' onChange={handleChange} />
                </div>
                <div className='input'>
                    <input type="text" name="lastName" placeholder='Last Name' onChange={handleChange} />
                </div>
                <div className='input'>
                    <input type="date" name="birthDate" placeholder='Birth Date' onChange={handleChange} />
                </div>
                <div className='input'>
                    <input type="text" name="street" placeholder='Street' onChange={handleChange} />
                </div>
                <div className='input'>
                    <input type="text" name="barangay" placeholder='Barangay' onChange={handleChange} />
                </div>
                <div className='input'>
                    <input type="text" name="province" placeholder='Province' onChange={handleChange} />
                </div>
                <div className='input'>
                    <input type="text" name="city" placeholder='City' onChange={handleChange} />
                </div>
                <div className='input'>
                    <select name="type" onChange={handleChange}>
                        <option value="">Select Type</option>
                        <option value="owner">Owner</option>
                        <option value="customer">Customer</option>
                    </select>
                </div>
                <div className='submit' onClick={handleSubmit}>Sign Up</div>
            </div>
        </div>
    );
};
