import React from 'react';
import deleteIcon from '../../assets/delete.png';
import { Link } from 'react-router-dom';

const WishlistGadget = ({gadget, handleWishlistDelete}) => {

    const { product_title, product_image, category, price, description, Specification, availability, rating, product_id } = gadget;

    return (
        <div>
            <div className='flex justify-start items-center border-2 rounded-2xl p-8 gap-8'>
                <div className='w-56 h-36 border-2 rounded-2xl flex justify-center items-center'>
                    <img className='w-[50%] bg-cover object-cover ' src={product_image} alt="" />
                </div>
                <div className='flex-grow'>
                    <p className='font-semibold text-2xl'>{product_title}</p>
                    <p className='font-normal text-base opacity-60 mt-3 mb-4'>{description}</p>
                    <p className='font-semibold text-xl opacity-80'>Price: ${price}</p>
                </div>
                <div>
                    <Link onClick={() => handleWishlistDelete(product_id)}>
                    <img className='w-6 h-6 opacity-90' src={deleteIcon} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WishlistGadget;