import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='text-center py-24 sorafont'>
            <p className='font-bold text-[32px]'>Gadget Heaven</p>
            <p className='font-medium text-base opacity-60 mt-3 pb-8 border-b-2 mb-8 '>Leading the way in cutting-edge technology and innovation.</p>
            <footer className="footer p-10 max-w-6xl mx-auto bg-white">
                <nav className='flex flex-col items-center gap-2'>
                    <h6 className="font-bold text-lg text-black mb-2">Services</h6>
                    <a className="link link-hover ">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className='flex flex-col items-center gap-2'>
                    <h6 className="font-bold text-lg text-black mb-2">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className='flex flex-col items-center gap-2'>
                    <h6 className="font-bold text-lg text-black mb-2">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;