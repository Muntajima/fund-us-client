import React from 'react';
import Navbar from '../components/Navbar';
import essencial from '../assets/essencial.webp';
import education from '../assets/education.webp';
import wildlife from '../assets/wildlife.webp';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Donate = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <Navbar />
            <div className='z-10'>
            <h3 className='text-3xl font-bold text-center my-12 pt-24'>Donate at Fund Us</h3>
            <p className='w-2/3 mx-auto text-center mb-8'>We are proud to support these funds — and hope you will consider doing so, too. Donations to these social impact funds go directly to grants to individuals in need, and in some cases, organizations working to provide aid or promote critical social change. Grants are distributed by our strategic nonprofit partner.</p>
            <div>
                <div className="hero bg-base-200 h-[500px]">
                    <div className="hero-content flex-col lg:flex-row gap-24">
                        <img
                            src={essencial}
                            className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-3xl font-bold">The Essentials Fund</h1>
                            <p className="py-6">
                                Every day, hundreds of Americans start fundraisers for basic necessities like food, housing, and utilities. The Essentials Fund distributes cash grants to help individuals make ends meet and find paths to stability.
                            </p>
                            <Link to='/contact-us' className="btn bg-orange-500 text-white">Donate</Link>
                        </div>
                    </div>
                </div>
                {/* second */}
                <div className="hero bg-base-200 h-[500px]">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src={education}
                            className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-3xl font-bold">The Education and Opportunity Fund</h1>
                            <p className="py-6 pr-24">
                                Teachers often spend their own money to give their students the best learning experience possible. The Education Opportunity Fund supports educators and organizations dedicated to helping students grow—from supplying pens and books to providing snacks so students can stay engaged throughout the day.
                            </p>
                            <Link to='/contact-us' className="btn bg-orange-500 text-white">Donate</Link>
                        </div>
                    </div>
                </div>
                {/* third */}
                <div className="hero bg-base-200 h-[500px]">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={wildlife}
                            className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-3xl font-bold ml-24">The Wildfire Relief Fund</h1>
                            <p className="py-6 ml-24">
                            This fund was created to provide direct relief to people in need after a wildfire. Your donation will ensure this fund can support as many people as possible as soon as a disaster strikes.
                            </p>
                            <Link to='/contact-us' className="btn bg-orange-500 text-white">Donate</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Donate;