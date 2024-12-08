import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import LottieAnimation from './LottieAnimation';
import Error from './Error';

const Register = () => {
    const {createUser, updateUserProfile, setUsers, users} = useContext(AuthContext);
    const [error, setError] = useState(true);
    const navigate = useNavigate();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if(!passwordRegex.test(password)){
            setError(false);
            Swal.fire({
                title: 'Ooops!',
                text: 'Must have atleast one Uppercase, one lowercase and minimum length 6 character',
                icon: 'warning',
                confirmButtonText: 'Thanks',
            })
            return;
        }
        
        //console.log(newUser)

        createUser(email, password)
        .then(result =>{
            const user = (result.user);
            setUsers(user);
            
            updateUserProfile({displayName: name, photoURL: photo})
            .then(() =>{
                navigate('/')
            })
            .catch(err =>{
                <Error/>
            } )
            const createdAt = result?.user?.metadata?.creationTime;
            const newUser = {name, email, photo, password,createdAt};

            //send user to db
        fetch('https://crowd-fund-delta-nine.vercel.app/users', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully registered',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                });
                
            }
            
            
        })
            
        })
        .catch(error =>{
            console.log('ERROR', error);
        })

        
    }
    return (
        <div>
            <div><Navbar /></div>
            <div>
                <div className="hero bg-rose-700 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card bg-base-100">
                            <form onSubmit={handleRegister} className="card-body w-[400px]">
                                <div className="text-center lg:text-left">
                                    <h1 className="text-5xl font-bold">Ragister now!</h1>

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"  
                                    placeholder="your name"
                                    name='name'
                                    className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" 
                                    placeholder="email" 
                                    name='email'
                                    className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="photo"
                                        placeholder="photo-url"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" 
                                    placeholder="password" 
                                    name='password'
                                    className="input input-bordered" required />
                                    
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-neutral">Register</button>
                                </div>
                            </form>
                            <p className="text-center font-semibold">
                                Allready Have An Account ?{" "}
                                <Link className="text-red-500" to="/login">
                                    Login
                                </Link>
                            </p>
                            <Link  className='text-blue-600 underline text-center mb-8 font-semibold'> Google only</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div><Footer /></div>
        </div>
    );
};

export default Register;