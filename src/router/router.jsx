import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddNewCampaign from "../components/AddNewCampaign";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      loader: () => fetch('http://localhost:5000/campaign')
    },
    {
        path: 'all-campaign',
        element: <AddNewCampaign/>,
        loader: () => fetch('http://localhost:5000/campaign')
    },
    {
        path: 'add-new-campaign',
        element: <AddNewCampaign/>
    }
  ]);

export default router;