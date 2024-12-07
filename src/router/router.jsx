import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddNewCampaign from "../components/AddNewCampaign";
import AllCampaignCard from "../components/AllCampaignCard";
import AllCampaign from "../components/AllCampaign";
import AllCamp from "../components/AllCamp";
import Register from "../components/Register";
import Login from "../components/Login";
import MyCampaign from "../components/MyCampaign";
import MyDonation from "../components/MyDonation";
import Update from "../components/Update";
import Detail from "../components/Detail";
import PrivateRoute from "./PrivateRoute";
import Error from "../components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error/>,
    loader: () => fetch('http://localhost:5000/campaign'),
    
  },
  {
    path: 'all-campaign',
    element: <AllCampaign />,
    loader: () => fetch('http://localhost:5000/campaign'),
  },
  {
    path: 'add-new-campaign',
    element: <AddNewCampaign />
  },
  {
    path: 'all-campaign-card',
    element: <AllCampaignCard />,
    loader: () => fetch('http://localhost:5000/campaign'),
  },
  {
    path: 'register',
    element: <Register/>
  },
  {
    path: 'login',
    element: <Login/>
  },
  {
    path: 'my-campaign',
    element: <MyCampaign/>,
    loader: () => fetch('http://localhost:5000/campaign')
  },
  {
    path: 'my-donation',
    element: <MyDonation/>,
    loader: () => fetch('http://localhost:5000/campaign')
  },
  {
    path: 'update/:id',
    element: <Update/>,
    loader: ({params}) => fetch(`http://localhost:5000/campaign/${params.id}`)
  },
  {
    path: 'detail/:id',
    element: <PrivateRoute>
      <Detail/>
    </PrivateRoute>,
    loader: ({params}) => fetch(`http://localhost:5000/campaign/${params.id}`)
  },
 
]);

export default router;