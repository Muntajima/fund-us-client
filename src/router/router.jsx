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
import About from "../pages/About";
import Donate from "../pages/Donate";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error/>,
    loader: () => fetch('https://crowd-fund-delta-nine.vercel.app/campaign'),
    
  },
  {
    path: 'all-campaign',
    element: <AllCampaign />,
    loader: () => fetch('https://crowd-fund-delta-nine.vercel.app/campaign'),
  },
  {
    path: 'add-new-campaign',
    element: <AddNewCampaign />
  },
  {
    path: 'all-campaign-card',
    element: <AllCampaignCard />,
    loader: () => fetch('https://crowd-fund-delta-nine.vercel.app/campaign'),
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
    loader: () => fetch('https://crowd-fund-delta-nine.vercel.app/campaign')
  },
  {
    path: 'my-donation',
    element: <MyDonation/>,
    loader: () => fetch('https://crowd-fund-delta-nine.vercel.app/campaign')
  },
  {
    path: 'update/:id',
    element: <Update/>,
    loader: ({params}) => fetch(`https://crowd-fund-delta-nine.vercel.app/campaign/${params.id}`)
  },
  {
    path: 'detail/:id',
    element: <PrivateRoute>
      <Detail/>
    </PrivateRoute>,
    loader: ({params}) => fetch(`https://crowd-fund-delta-nine.vercel.app/campaign/${params.id}`)
  },
  {
    path: 'about',
    element: <About/>
  },
  {
    path: 'donate',
    element: <Donate/>
  },
  {
    path: 'contact-us',
    element: <ContactUs/>
  },
  
 
]);

export default router;