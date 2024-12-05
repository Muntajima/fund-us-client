import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AllCamp = ({camp}) => {
    
    const { _id, title, type, amount, deadline, description, image, name, email } = camp || {};
    console.log(camp)
    return (
        <div>
            
            <div className="card card-side bg-base-100 border border-2">
                <figure>
                    <img
                        src={image}
                        alt="Movie" 
                        className='w-3/4'/>
                </figure>
                <div className="card-body w-3/4">
                <h2 className="card-title">{title} ({type})</h2>
                <h3>Minimum amount: {amount}</h3>
                <h3>Deadline: {deadline}</h3>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AllCamp;