
import { useLoaderData } from 'react-router-dom';
import CampaignCard from './CampaignCard';

const AllCampaign = () => {
    const campaigns = useLoaderData();
    console.log(campaigns)
    return (
        <div>
            <h2>total campaigns:{campaigns.length}</h2>
            <div>
                {campaigns.map(campaign => <CampaignCard
                    key={campaign._id}
                    campaign={campaign}
                ></CampaignCard>)}
            </div>
        </div>
    );
};

export default AllCampaign;