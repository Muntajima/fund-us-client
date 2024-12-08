
import { useLoaderData } from 'react-router-dom';
import CampaignCard from './CampaignCard';
import AllCampaignCard from './AllCampaignCard';
import { useEffect, useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const AllCampaign = () => {
    const campaigns = useLoaderData();
    const [camps, setCamps] = useState([]);


    useEffect(() => {
        const copycamps = [...campaigns];
        setCamps(copycamps.slice(0, 6))
    }, [])
    //console.log(camps[0].title)


    return (
        <div>
            <div className='text-2xl font-bold text-center my-8'>
                <Slide>All Campaigns</Slide>
            </div>
            <Fade>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                    {camps.map(camp => <CampaignCard
                        key={camp._id}
                        camp={camp}
                    ></CampaignCard>)}
                </div>
            </Fade>


        </div>
    );
};

export default AllCampaign;