import React, { useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import LottieAnimation from './LottieAnimation';
import Swal from 'sweetalert2';

const Login = () => {
    const {userLogin, setUsers, users} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        userLogin(email, password)
        .then(result =>{
            console.log(result.user);
            const user = result.user;
            setUsers(user)
            Swal.fire({
                title: "Sweet!",
                text: "You are our authorized user",
                icon: "success"
              });
            navigate(location?.state ? location.state : '/my-campaign')

            if(users){
                console.log(users)
            }
            
           
        })
        .catch(error =>{
            Swal.fire({
                title: "Ooops!",
                text: "Invalid email and password.",
                icon: "error"
              });
        })
    }
    return (
        <div>
            <div><Navbar /></div>
            <div>
                <div className="hero bg-rose-700">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card bg-base-100 w-full">
                            <form onSubmit={handleLogin} className="card-body w-[400px]">
                                <div className="text-center lg:text-left p-4">
                                    <h1 className="text-5xl font-bold text-center">Login now!</h1>

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
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password"
                                        name='password'
                                        className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-neutral">Login</button>
                                </div>
                            </form>
                            <p className="text-center font-semibold">
                                Don't Have An Account ?{" "}
                                <Link className="text-red-500" to="/register">
                                    Register
                                </Link>
                            </p>
                            <Link className='text-blue-600 underline text-center mb-8 font-semibold'> Google only</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div><Footer /></div>
        </div>
    );
};

export default Login;