import React, { useState } from 'react';
import { deleteSubscription } from '../../Service/ApiService';
import './Subscription.css';

export const DeleteSubscription = () => {
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
            const response = await deleteSubscription(email);
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
                <div className="text">Delete Subscription</div>
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
                <div className='submit' onClick={handleDeletion}>Delete Subscription</div>
            </div>
        </div>
    );
};
