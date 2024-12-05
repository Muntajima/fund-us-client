import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import AllCampaign from '../components/AllCampaign';
import CampaignCard from '../components/CampaignCard';

const Home = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <nav><Navbar/></nav>
            <header><Banner/></header>
            <main>
                <section><AllCampaign/></section>
                {/* <section><CampaignCard/></section> */}
            </main>
            <footer className='mt-12'><Footer/></footer>
        </div>
    );
};

export default Home;