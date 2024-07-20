import React, { useState } from 'react';
import { deleteAccount } from '../../Service/ApiService';
import './LoginSignUp.css';

export const DeleteAccount = () => {
    const [email, setEmail] = useState('');

    const alertMessage = (val) => {
        alert(val);
    };

    const getEmail = (val) => {
        setEmail(val.target.value);
    };

    const handleDeletion = async (event) => {
        event.preventDefault();
        const confirmDeletion = window.confirm(`Are you sure you want to delete ${email}?`);
        if (!confirmDeletion) {
            return;
        }
        try {
            const response = await deleteAccount(email);
            alertMessage(response);
        } catch (error) {
            if (error.response && error.response.data) {
                alertMessage(`Delete failed: ${error.response.data}`);
            } else {
                alertMessage(`Delete failed: ${error.message}`);
            }
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">Delete Account</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className='input'>
                    <input 
                        type="email" 
                        placeholder='Email' 
                        onChange={getEmail}
                        value={email}
                    />
                </div>
                <div className='submit' onClick={handleDeletion}>Delete Account</div>
            </div>
        </div>
    );
};
