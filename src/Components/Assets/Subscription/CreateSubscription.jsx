import React, { useState } from 'react';
import './Subscription.css';
import { createSubscription } from '../../Service/ApiService';
export const CreateSubscription = () => {
    const [customerEmail, setCustomerEmail] = useState('');
    const [stationEmail, setStationEmail] = useState('');

    const alertMessage = (val) => {
        alert(`${val}`);
    };

    const getCustomerEmail = (val) => {
        setCustomerEmail(val.target.value);
    };

    const getStationEmail = (val) => {
        setStationEmail(val.target.value);
    };

    const handleSubscription = async (event) => {
        event.preventDefault();
        try {
            const response = await createSubscription({ customerEmail, stationEmail });
            alertMessage("Subscription created successfully");
        } catch (error) {
            if (error.response && error.response.data && error.response.data.Message) {
                alertMessage(`Create Subscription failed: ${error.response.data.Message}`);
            } else {
                alertMessage(`Create Subscription failed: ${error.message}`);
            }
        }
    };
  return (
    <div className="container">
        <div className="header">
            <div className="text">Create Subscription</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className='input'>
                <input type="email" placeholder='Customer Email' onChange={getCustomerEmail}/>
            </div>
            <div className='input'>
                <input type="email" placeholder='Station Email' onChange={getStationEmail}/>
            </div>
            
            <div className='submit' onClick={handleSubscription}>Add Subscription</div>
        </div>
    </div>
    
  )
}
