import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Toaster } from 'react-hot-toast';
import '../../App.css'


const Root = () => {

    return (
        <div className='sora-font'>
            <Toaster></Toaster>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;