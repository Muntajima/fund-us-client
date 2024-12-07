import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import AllCampaign from '../components/AllCampaign';
import CampaignCard from '../components/CampaignCard';
import LottieAnimation from '../components/LottieAnimation';
import Animation from '../components/Animation';

const Home = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <nav><Navbar/></nav>
            <header><Banner/></header>
            <main>
                <section><Animation/></section>
                <section><AllCampaign/></section>
            </main>
            <footer className='mt-12'><Footer/></footer>
        </div>
    );
};

export default Home;