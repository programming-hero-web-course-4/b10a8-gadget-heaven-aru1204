import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import wishlistIcon from '../../assets/wishlist.svg';
import cartIcon from '../../assets/cart.png';
import '../NavBar/NavBar.css';
import { grtCartArray } from '../utilities/Cart';
import { grtWishlistArray } from '../utilities/wishllist';


const NavBar = () => {

    let [activeRoute, setActiveRoute] = useState('home');

    const [totalCartItems, setTotalCartItems] = useState(0)
    const [totalWishlistItems, setTotalWishlistItems] = useState(0)

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setActiveRoute('home');
        }
        else {
            setActiveRoute('others');
        }

        const cartItems = grtCartArray();
        const totalCartItems = cartItems.length;
        setTotalCartItems(totalCartItems);

        const wishlistItems = grtWishlistArray();
        const totalWishlistItems = wishlistItems.length;
        setTotalWishlistItems(totalWishlistItems);
    }, [location])



    const links = <>

        <li><NavLink
            className={`${activeRoute === 'home' ? "text-white " : ""}`}
            onClick={() => handleNavbar('home')} to={'/'}
        >Home</NavLink></li>

        <li><NavLink
            style={({ isActive }) => ({
                backgroundColor: isActive ? 'white' : '',
                color: isActive ? 'black' : '',
            })}
            className={`${activeRoute === 'home' ? "text-white " : ""}`}
            onClick={() => handleNavbar('dashboard')} to={'/dashboard'}>Dashboard</NavLink></li>

        <li><NavLink
            style={({ isActive }) => ({
                backgroundColor: isActive ? 'white' : '',
                color: isActive ? 'black' : '',
            })}
            className={`${activeRoute === 'home' ? "text-white " : ""}`}
            onClick={() => handleNavbar('dashboard')} to={'/contactus'}>Contact Us</NavLink></li>
    </>

    return (
        <div className={`${activeRoute === 'home' ? "bg-[#9538E2] max-w-[1540px] mx-auto mt-8 rounded-t-[32px]" : "mt-8 bg-white"}`}>
            <div className={` ${activeRoute === 'home' ? "bg-[#9538E2] navbar max-w-7xl mx-auto py-5" : " navbar max-w-7xl mx-auto py-5 bg-white"}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow" >
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className={`${activeRoute === 'home' ? "font-bold text-xl text-white" : "font-bold text-xl"}`}>Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-12">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end flex justify-end items-center gap-4">
                    <div className='relative'>
                        <div className='absolute w-7 h-7 -right-3 -top-3 p-1 rounded-full border flex items-center justify-center bg-gray-100'>
                            <p className='font-semibold text-lg'>{totalCartItems}</p>
                        </div>
                        <img className={`${activeRoute === 'home' ? "w-11 p-[9px] bg-white rounded-full" : "w-11 p-2 border-2 rounded-full"}`} src={cartIcon} alt="" />
                    </div>
                    <div className='relative'>
                        <div className='absolute w-7 h-7 -right-3 -top-3 p-1 rounded-full border flex items-center justify-center bg-gray-100'>
                            <p className='font-semibold text-lg'>{totalWishlistItems}</p>
                        </div>
                        <img className={`${activeRoute === 'home' ? "w-11 p-[9px] bg-white rounded-full" : "w-11 p-2 border-2 rounded-full"}`} src={wishlistIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;