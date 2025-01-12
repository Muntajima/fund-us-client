import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const AllCamp = ({camp}) => {
    
    const { _id, title, type, amount, deadline, description, image, name, email } = camp || {};
    console.log(camp)
    return (
        <div className='mb-12'>
            <div className="card lg:card-side bg-base-100 border border-2">
                <figure>
                    <img
                        src={image}
                        alt="Movie" 
                        className='w-3/4 my-24'/>
                </figure>
                <div className="card-body w-3/4">
                <h2 className="card-title">{title} ({type})</h2>
                <h3>Minimum amount: {amount}</h3>
                <h3>Deadline: {deadline}</h3>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/detail/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AllCamp;