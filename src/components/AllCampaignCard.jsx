import Navbar from './Navbar';
import Footer from './Footer';
import { useLoaderData } from 'react-router-dom';
import AllCamp from './AllCamp';

const AllCampaignCard = () => {

    const camps = useLoaderData();
   
    return (
        <>
            <div><Navbar /></div>
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