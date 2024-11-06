import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className='max-w-[1540px] mx-auto bg-[#9538E2] h-[696px] rounded-b-[32px] mb-[450px]'>
                <div className='flex flex-col items-center justify-between max-w-[1122px] mx-auto '>
                    <h3 className='font-bold text-[56px] text-center text-white pt-12'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h3>
                    <p className='font-normal text-base text-center text-white pt-6 pb-8 max-w-[796px] mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <Link to={'/dashboard'}><button className='font-bold text-xl py-[15px] px-8 rounded-[32px] bg-white text-[#9538E2] mb-12'>Shop Now</button></Link>
                </div>
                <div>
                    <div className='max-w-[1100px] mx-auto h-[611px] border-2 border-white p-6 rounded-3xl bg-[rgba(255,255,255,.3)]'>
                        <img className=' rounded-3xl h-full w-full object-cover' src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;