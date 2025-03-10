import React, { useState } from 'react';
import './LoginSignUp.css';
import { fetchAllAccounts } from '../../Service/ApiService';

export const DisplayAccounts = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const accounts = await fetchAllAccounts();
            setData(accounts);
        } catch (error) {
            console.error('Error fetching accounts', error);
        }
    };
    
    return (
        <div className="container">
                <div className="header">
                    <div className="text">All Accounts</div>
                    <div className="underline"></div>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user, index) => (
                                <tr key={index}>
                                    <td>{`${user.firstName} ${user.middleName} ${user.lastName}`}</td>
                                    <td>{user.email}</td>
                                    <td>{user.city}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            <div className='submit' onClick={getData}>Get Accounts</div>
        </div>
    );
};
