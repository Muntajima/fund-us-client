
import { useLoaderData } from 'react-router-dom';
import CampaignCard from './CampaignCard';
import AllCampaignCard from './AllCampaignCard';
import { useEffect, useState } from 'react';

const AllCampaign = () => {
    const campaigns = useLoaderData();
    const [camps, setCamps] = useState([]);
    

    useEffect(() =>{
        const copycamps = [...campaigns];
        setCamps(copycamps.slice(0, 6))
    }, [])
    //console.log(camps[0].title)


    return (
        <div>
            <h2>total campaigns:{camps.length}</h2>
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {camps.map(camp => <CampaignCard
                    key={camp._id}
                    camp={camp}
                ></CampaignCard>)}
            </div>
            
        </div>
    );
};

export default AllCampaign;