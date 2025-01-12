import Navbar from './Navbar';
import Footer from './Footer';
import { useLoaderData } from 'react-router-dom';
import AllCamp from './AllCamp';

const AllCampaignCard = () => {

    const camps = useLoaderData();
   
    return (
        <>
            <div><Navbar /></div>
            <h3 className='text-3xl font-bold text-center mb-12 pt-24'>All Available Campaigns</h3>
            <p className='lg:w-1/3 mx-auto text-center mb-8 px-2'>Through FundUs, people and organisations have the tools they need to share their cause far and wide and harness the power of generosity. We are transforming the way people give and changing lives—are you ready to join us?</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-4/5 mx-auto'>
            {
                camps.map(camp => <AllCamp
                key={camp._id}
                camp={camp}
                />)
            }
        </div>
        <div><Footer /></div>
        </>
        
    );
};

export default AllCampaignCard;