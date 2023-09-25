import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import DonationDetails from './components/DonationDetails/DonationDetails';
import Error from './components/Error/Error';
import Satistics from './components/Statistics/Satistics';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <Error></Error>,
    children : [
      {
        path : "/",
        loader : () => fetch('/donation.json'),
        element : <Home></Home>
      },
      {
        path : "/donation",
        element : <Donation></Donation>
      },
      {
        path : "/donationDetails/:id",
        element : <DonationDetails></DonationDetails>,
        loader : () => fetch('/donation.json'),
      },
      {
        path : "/statistics",
        element : <Satistics></Satistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
