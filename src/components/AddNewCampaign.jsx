import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AddNewCampaign = () => {
    return (
        <div>
            <div><Navbar/></div>
            <h2>Add new campaign for your project</h2>
            <div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <span>Email</span>
                        <input type="text" placeholder="info@site.com" className="input input-bordered" />
                    </label>
                </div>
            </div>
            <div><Footer/></div>
        </div>
    );
};

export default AddNewCampaign;