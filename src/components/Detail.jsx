import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from '../provider/AuthProvider';
import LottieAnimation from './LottieAnimation';

const Detail = () => {
    const {users} = useContext(AuthContext);
    const obj = useParams();
    const campaigns = useLoaderData();
    // const { _id, title, type, amount, deadline, description, image, name, email } = campaigns;

    if (!campaigns) {
        return <div><LottieAnimation/></div>;
    }
   
    const { _id, title = "N/A", type = "N/A", amount = 0, deadline = "N/A", description = "N/A", image = "", name = "N/A", email = "N/A" } = campaigns || {};

       const handleDonation = () =>{
        //console.log(campaigns)
        const donationData = {
            campaignId: campaigns._id,
            title: campaigns.title,
            type: campaigns.type,
            amount: campaigns.amount,
            email: users.email,
            username: users.displayName,
        };
        
        //console.log(donationData)
      
        fetch('https://crowd-fund-delta-nine.vercel.app/donated', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donationData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }
    return (
        <div>
            <div><Navbar /></div>
            <div className='w-2/3 mx-auto'>
                <h2 className='text-3xl font-bold text-center my-8'>Campaign Details</h2>


                <div className="card bg-base-100 w-[600px] shadow-xl -right-60">
                    <figure className="px-10 pt-10">
                        <img
                            src={image} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p><strong>Campaign type: </strong>{type}</p>
                        <p>{description}</p>
                        <div className='flex gap-12'>
                            <h2><strong>Deadline:</strong> {deadline}</h2>
                            <h2><strong>Amount:</strong> {amount}</h2>
                        </div>
                        <div className='flex gap-12'>
                            <h2><strong>Campaign's Owner:</strong> {name}</h2>
                            <h2><strong>Email</strong> {email}</h2>
                        </div>
                        <div className="card-actions my-4">
                            <button onClick={handleDonation} className="btn btn-accent">Donate Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div><Footer /></div>
        </div>
    );
};

export default Detail; <h2>show me detail</h2>