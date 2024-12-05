import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddNewCampaign from "../components/AddNewCampaign";
import AllCampaignCard from "../components/AllCampaignCard";
import AllCampaign from "../components/AllCampaign";
import AllCamp from "../components/AllCamp";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      loader: () => fetch('http://localhost:5000/campaign'),
    },
        {
          path: 'all-campaign',
          element: <AllCampaign/>,
          loader: () => fetch('http://localhost:5000/campaign'),
      },
      {
          path: 'add-new-campaign',
          element: <AddNewCampaign/>
      },     
    {
      path: 'all-campaign-card',
      element: <AllCampaignCard/>,
      loader: () => fetch('http://localhost:5000/campaign'),
    }
    
  ]);

export default router;