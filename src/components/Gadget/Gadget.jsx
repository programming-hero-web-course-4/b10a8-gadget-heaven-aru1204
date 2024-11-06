import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {

    const { product_title, product_image, price, product_id } = gadget;

    return (
        <div className='p-5 border rounded-2xl'>
            <div className='w-72 h-44 rounded-xl border flex items-center justify-center'>
                <img className='w-[45%] bg-cover object-cover' src={product_image} alt="" />
            </div>
            <h1 className='font-semibold text-2xl mt-6 mb-3'>{product_title}</h1>
            <h1 className='font-medium text-xl opacity-60'>Price: ${price}</h1>
            <Link to={`/gadget/${product_id}`}><button className='text-[#9538E2] border-2 border-[#9538E2] rounded-[32px] py-2 px-5 font-semibold text-lg mt-4'>View Details</button></Link>
        </div>
    );
};

export default Gadget;