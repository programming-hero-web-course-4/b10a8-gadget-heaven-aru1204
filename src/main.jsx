import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import GadgetCards from './components/GadgetCards/GadgetCards';
import AllgadgetCards from './components/AllgadgetCards/AllgadgetCards';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';
import GadgetDetails from './components/GadgetDetails/GadgetDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ContactUs from './components/ContactUs/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <AllgadgetCards></AllgadgetCards>
          },
          {
            path: '/category/:category',
            element: <GadgetCards></GadgetCards>,
          }
        ]
      },
      {
        path: 'gadget/:gadgetId',
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch('/gadget.json')
      },
      {
        path: '/contactus',
        element: <ContactUs></ContactUs>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard/',
            element: <Cart></Cart>,
            loader: () => fetch('/gadget.json')
          },
          {
            path: '/dashboard/wishlist',
            element: <Wishlist></Wishlist>,
            loader: () => fetch('/gadget.json')
          }
        ]
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
