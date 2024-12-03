import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AddNewCampaign = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <div><Navbar /></div>
            <h2 className='font-bold text-2xl text-center'>Add new campaign for your project</h2>
            <p className='text-center mt-4 mb-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptas aut ex eaque dolor delectus eveniet sit, magnam accusamus est.</p>
            <div className='mb-12 w-2/3 flex flex-col justify-between mx-auto'>
                <div className=''>
                    <div className="">
                        <label className="input-group">
                            <span className='mr-4'>Image</span>
                            <input type="text" placeholder="info@site.com" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <div className='flex justify-between items-center'>
                    <div className="">
                        <label className="input-group">
                            <span className=''>Campaign Title</span>
                            <input type="text" placeholder="info@site.com" className="input input-bordered w-[250px]" />
                        </label>
                    </div>
                    <div className="">
                        <label className="input-group">
                            <span className=''>Campaign Type</span>
                            <input type="text" placeholder="info@site.com" className="input input-bordered w-[250px]" />
                        </label>
                    </div>

                </div>

                <div className='flex gap-20'>
                    <div className="">
                        <label className="input-group">
                            <span className='mr-4'>Minimum Donation Amount</span>
                            <input type="text" placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="">
                        <label className="input-group">
                            <span className='mr-4'>Deadline</span>
                            <input type="text" placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>

                </div>

                <div className='flex gap-20'>
                    <div className="">
                        <label className="input-group">
                            <span className='mr-4'>Name</span>
                            <input type="text" placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="">
                        <label className="input-group">
                            <span className='mr-4'>email</span>
                            <input type="text" placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>
                </div>
            </div>
            <div><Footer /></div>
        </div>
    );
};

export default AddNewCampaign;