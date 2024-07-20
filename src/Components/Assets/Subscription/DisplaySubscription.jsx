import React, { useState } from 'react';
import './Subscription.css'
import { fetchAllSubscriptions } from '../../Service/ApiService';

export const DisplaySubscription = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const inventories = await fetchAllSubscriptions();
            setData(inventories);
        } catch (error) {
            console.error('Error fetching subscriptions', error);
        }
    };
    
    return (
        <div className="container">
                <div className="header">
                    <div className="text">All Subscriptions</div>
                    <div className="underline"></div>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Customer Email</th>
                            <th>Station Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.customerEmail}</td>
                                    <td>{user.stationEmail}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            <div className='submit' onClick={getData}>Get Subscriptions</div>
        </div>
    );
}
