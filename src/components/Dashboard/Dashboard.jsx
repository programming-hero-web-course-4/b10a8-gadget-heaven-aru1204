import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Dashboard = () => {

    let [activeRaute, setActiveRaute] = useState('cart');

    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/dashboard/' ){
            setActiveRaute('cart');
        }

        if(location.pathname === '/dashboard/wishlist' ){
            setActiveRaute('wishlist');
        }
    },[location, useState])


    return (
        <div className='sora-font'>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
                <meta name="description" content="Gadget Heaven" />
            </Helmet>
            <div className='bg-[#9538E2]'>
                <h4 className='font-bold text-[32px] text-white text-center pt-8 pb-4'>Dashboard</h4>
                <p className='font-normal text-base text-white text-center max-w-3xl mx-auto pb-8'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className='mx-auto flex items-center justify-center gap-6 pb-8'>

                    <NavLink to={'/dashboard/'}
                    className={`${activeRaute === 'cart' ? "!bg-white !text-[#9538E2] rounded-[32px] !font-bold py-3 px-16" : "bg-[#9538E2] !text-white !font-medium"}`}
                    >
                        <button
                            className='text-lg  '
                        >Cart</button>
                    </NavLink>

                    <NavLink to={'/dashboard/wishlist'}
                    className={`${activeRaute === 'wishlist' ? "!bg-white !text-[#9538E2] rounded-[32px] !font-bold py-3 px-16" : "bg-[#9538E2] !text-white !font-medium"}`}
                    >
                        <button
                            className=' text-lg '
                        >Wishlist</button>
                    </NavLink>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;