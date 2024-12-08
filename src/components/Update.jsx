import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Swal from 'sweetalert2';


const Update = () => {
    const {users, loading} = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(users)

    const data = useLoaderData();
    const { _id, title, type, amount, deadline, description, image, name, email } = data;

    const handleUpdateCampaign = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const type = form.type.value;
        const amount = form.amount.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const image = form.image.value;
        const name = form.name.value;
        const email = form.email.value;

        const updatedCampaign = { _id, title, type, amount, deadline, description, image, name, email };
        console.log(updatedCampaign);

        //send data to the server
        fetch(`https://crowd-fund-delta-nine.vercel.app/campaign/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCampaign)
        })      
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your campaign updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Perfect'
                  })
                }
        })
    }
    return (
        <div className='w-4/5 mx-auto'>
            <div><Navbar /></div>
            <h2 className='font-bold text-2xl text-center'>Update your campaign for your project</h2>
            <p className='text-center mt-4 mb-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptas aut ex eaque dolor delectus eveniet sit, magnam accusamus est.</p>

            <div>
                
                    <div>
                        <form onSubmit={handleUpdateCampaign}>
                <div className='md:flex mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Campaign Title</span>
                        </label>
                        <label className='input-group'>
                            <input type="text"
                                name="title"
                                defaultValue={title}
                                placeholder='campaign title' className='input input-bordered w-full' />
                        </label>

                    </div>

                    <div className="form-control md:w-1/2 ml-8">
                        <label className="label">
                            <span className="label-text">Campaign Type</span>
                        </label>
                        <select
                            name="type"
                            className="select select-bordered w-full"
                            defaultValue="type"
                        >
                            <option value="" disabled>
                                Choose type
                            </option>
                            <option value="Medical">Medical</option>
                            <option value="Business">Business</option>
                            <option value="Environment">Environment</option>
                            <option value="Animal">Animal</option>
                        </select>
                    </div>

                </div>

                <div className='md:flex mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Donation Amount</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="amount" 
                            defaultValue={amount}
                            placeholder='minimum amount' className='input input-bordered w-full' />
                        </label>

                    </div>
                    <div className='form-control md:w-1/2 ml-8'>
                        <label className='label'>
                            <span className='label-text'>Deadline</span>
                        </label>
                        <label className='input-group'>
                            <input type="datetime-local" name="deadline"
                            defaultValue={deadline}
                            placeholder='name' className='input input-bordered w-full' id="" />
                        </label>

                    </div>

                </div>

                <div className='md:flex mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Image</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="image" placeholder='photo url' 
                            defaultValue={image}
                            className='input input-bordered w-full' />
                        </label>

                    </div>
                    <div className='form-control md:w-1/2 ml-8'>
                        <label className='label'>
                            <span className='label-text'>Description</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="description" 
                            defaultValue={description}
                            placeholder='description' className='input input-bordered w-full' />
                        </label>

                    </div>

                </div>

                <div className='md:flex mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text"
                                name="name" placeholder='your name' 
                                defaultValue={users.displayName}
                                className='input input-bordered w-full' readOnly />
                        </label>

                    </div>
                    <div className='form-control md:w-1/2 ml-8'>
                        <label className='label'>
                            <span className='label-text'>Email</span>
                        </label>
                        <label className='input-group'>
                            <input type="text"
                                name="email" placeholder='email' 
                                defaultValue={users.email}
                                className='input input-bordered w-full'
                                readOnly />
                        </label>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Update Campaign" className='btn btn-block bg-gray-700 text-white' />
                </div>
            </form>
                    </div> 
                
            </div>

            

            <div className='mt-12'><Footer /></div>
        </div>
    );
};

export default Update;