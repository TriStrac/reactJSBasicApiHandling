import React, { useState } from 'react';
import './Inventory.css'
import { fetchAllInventory } from '../../Service/ApiService';

export const DisplayInventory = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const inventories = await fetchAllInventory();
            setData(inventories);
        } catch (error) {
            console.error('Error fetching inventories', error);
        }
    };
    
    return (
        <div className="container">
                <div className="header">
                    <div className="text">All Inventories</div>
                    <div className="underline"></div>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Gallons</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.userEmail}</td>
                                    <td>{user.gallons}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            <div className='submit' onClick={getData}>Get Inventories</div>
        </div>
    );
}
