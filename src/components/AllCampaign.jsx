
import { useLoaderData } from 'react-router-dom';
import CampaignCard from './CampaignCard';
import AllCampaignCard from './AllCampaignCard';

const AllCampaign = () => {
    const campaigns = useLoaderData();
    console.log(campaigns)
    return (
        <div>
            <h2>total campaigns:{campaigns.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {campaigns.map(campaign => <CampaignCard
                    key={campaign._id}
                    campaign={campaign}
                ></CampaignCard>)}
            </div>
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    campaigns.map(camp => <AllCampaignCard
                        key={camp._id}
                        camp={camp}
                    ></AllCampaignCard>)
                }
            </div> */}
        </div>
    );
};

export default AllCampaign;