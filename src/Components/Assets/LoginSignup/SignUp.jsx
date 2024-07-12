import React, { useState } from 'react';
import './LoginSignUp.css';
import { createAccount } from '../../Service/ApiService'; // Import the createAccount function

export const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        middleName: '',
        lastName: '',
        birthdate: '', // Adjusted to match the API field name
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createAccount(formData);
            alert(`Account created: ${response.Message}`);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.Message) {
                alert(`Account creation failed: ${error.response.data.Message}`);
            } else {
                alert(`Account creation failed: ${error.message}`);
            }
        }
    };
    

    return (
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <form className="inputs" onSubmit={handleSubmit}>
                <div className='input'>
                    <input type="email" name="email" placeholder='Email' onChange={handleChange} required />
                </div>
                <div className='input'>
                    <input type="password" name="password" placeholder='Password' onChange={handleChange} required />
                </div>
                <div className='input'>
                    <input type="text" name="firstName" placeholder='First Name' onChange={handleChange} required />
                </div>
                <div className='input'>
                    <input type="text" name="middleName" placeholder='Middle Name' onChange={handleChange} />
                </div>
                <div className='input'>
                    <input type="text" name="lastName" placeholder='Last Name' onChange={handleChange} required />
                </div>
                <div className='input'>
                    <input type="date" name="birthdate" placeholder='Birth Date' onChange={handleChange} required /> {/* Adjusted to match the API field name */}
                </div>
                <div className='input'>
                    <input type="text" name="street" placeholder='Street' onChange={handleChange} required />
                </div>
                <div className='input'>
                    <input type="text" name="barangay" placeholder='Barangay' onChange={handleChange} required />
                </div>
                <div className='input'>
                    <input type="text" name="province" placeholder='Province' onChange={handleChange} required />
                </div>
                <div className='input'>
                    <input type="text" name="city" placeholder='City' onChange={handleChange} required />
                </div>
                <div className='input'>
                    <select name="type" onChange={handleChange} required>
                        <option value="">Select Type</option>
                        <option value="owner">Owner</option>
                        <option value="customer">Customer</option>
                    </select>
                </div>
                <div className='submit'>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};
