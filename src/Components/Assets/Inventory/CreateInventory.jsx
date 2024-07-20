import React, { useState } from 'react';
import './Inventory.css';
import { createInventory } from '../../Service/ApiService';
export const CreateInventory = () => {
    const [userEmail, setEmail] = useState('');
    const [gallons, setGallon] = useState('');

    const alertMessage = (val) => {
        alert(`${val}`);
    };

    const getEmail = (val) => {
        setEmail(val.target.value);
    };

    const getGallon = (val) => {
        setGallon(val.target.value);
    };

    const handleInventory = async (event) => {
        event.preventDefault();
        try {
            const response = await createInventory({ userEmail, gallons });
            alertMessage("Inventory created successfully");
        } catch (error) {
            if (error.response && error.response.data && error.response.data.Message) {
                alertMessage(`Create Inventory failed: ${error.response.data.Message}`);
            } else {
                alertMessage(`Create Inventory failed: ${error.message}`);
            }
        }
    };
  return (
    <div className="container">
        <div className="header">
            <div className="text">Create Inventory</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className='input'>
                <input type="email" placeholder='Email' onChange={getEmail}/>
            </div>
            <div className='input'>
                <input type="number" placeholder='Gallon' onChange={getGallon}/>
            </div>
            
            <div className='submit' onClick={handleInventory}>Add Inventory</div>
        </div>
    </div>
    
  )
}
