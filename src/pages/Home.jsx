import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import AllCampaign from '../components/AllCampaign';
import DeadlineDonate from '../components/DeadlineDonate';
import OldAgeProject from '../components/OldAgeProject';

const Home = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <nav><Navbar/></nav>
            <header><Banner/></header>
            <main>
                <section><AllCampaign/></section>
                <section className='my-8'><DeadlineDonate/></section>
                <section className='my-8'><OldAgeProject/></section>
            </main>
            <footer className='mt-12'><Footer/></footer>
        </div>
    );
};

export default Home;