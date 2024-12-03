import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddNewCampaign from "../components/AddNewCampaign";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
        path: 'all-campaign',
        element: <AddNewCampaign/>
    },
    {
        path: 'add-new-campaign',
        element: <AddNewCampaign/>
    }
  ]);

export default router;