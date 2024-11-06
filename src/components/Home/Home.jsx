import React from 'react';
import Banner from '../Banner/Banner';
import { NavLink, Outlet, useLoaderData, useParams, useLocation } from 'react-router-dom';
import "../Home/Home.css";
import { Helmet } from "react-helmet";


const Home = () => {

    const categories = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>Gadget | Gadget Heaven</title>
                <meta name="description" content="Gadget Heaven" />
            </Helmet>
            <Banner></Banner>
            <h4 className='font-bold text-4xl text-center mb-12'>Explore Cutting-Edge Gadgets</h4>
            <section className='max-w-7xl px-3 mx-auto flex gap-6'>
                <div className='flex flex-col gap-6 max-w-64 p-6 border-2 rounded-2xl h-fit'>
                    <NavLink className='font-medium text-lg py-3 px-7 bg-gray-100 rounded-[32px]' to={'/'}>All Product</NavLink>
                    {
                        categories.map((category, index) => <NavLink to={`/category/${category.category}`} key={index} className={`font-medium text-lg py-3 px-8 bg-gray-100 rounded-[32px] `}>{category.category}</NavLink>)
                    }
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </section>
        </div>
    );
};

export default Home;