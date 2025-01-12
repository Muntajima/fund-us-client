import React from 'react';
import Navbar from '../components/Navbar';
import aboutBanner from '../assets/about.jpg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <Navbar />
            <img src={aboutBanner} className='w-full h-[500px] object-cover' />
            <h3 className='text-3xl font-bold text-center my-12'>About Fund Us</h3>
            <p className='w-2/3 mx-auto text-center mb-8'>There’s a part of every one of us that dreams of a better world. That spark of inspiration to help a person, fix a neighborhood, or even change a nation. At FundUs, we empower both individuals and charities to turn compassion into action. Because that is how change happens. <br /><br />

                With fundraising for all, we are creating the giving layer of the internet: a space where individuals, teams, organisations, and nonprofits can champion causes that matter and raise money to make a lasting difference. Through FundUs, people and organisations have the tools they need to share their cause far and wide and harness the power of generosity. We are transforming the way people give and changing lives—are you ready to join us?</p>
                <Link to='/contact-us'
                className='btn bg-orange-400 text-white flex items-center w-44 mx-auto justify-center mb-8'
                >Contact Us</Link>
                <Footer/>
        </div>
    );
};

export default About;