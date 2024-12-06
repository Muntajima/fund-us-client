import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLoaderData } from 'react-router-dom';

const MyDonation = () => {
    const { users } = useContext(AuthContext);
    const campaigns = useLoaderData();
    const [camps, setCamps] = useState([]);

    useEffect(() => {
        if (users) {
            const copyCampaigns = [...campaigns];
            const userCamps = copyCampaigns.filter(data => data.email === users.email)
            setCamps(userCamps);
        }
    }, [users])

    return (
        <div>
            <div><Navbar /></div>
            <div>
                {
                    camps.map(camp => (
                        <div className='flex flex-row justify-center mb-4'>
                            <div className="card card-side bg-base-100">
                            <figure>
                                <img
                                    src={camp.image}
                                    alt="Movie"
                                    className='w-3/4 rounded-lg' />
                            </figure>
                            <div className="card-body w-3/4">
                                <h2 className="card-title">{camp.title} ({camp.type})</h2>
                                <h3>Minimum amount: {camp.amount}</h3>
                                <h3>Deadline: {camp.deadline}</h3>
                                <p>{camp.description}</p>
                                <div className="card-actions justify-left mt-4">
                                    <button className="btn btn-outline px-8">Details</button>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                    ))
                }
            </div>
            <div><Footer /></div>
        </div>
    );
};

export default MyDonation;