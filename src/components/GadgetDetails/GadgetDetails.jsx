import React, { useEffect } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import wishlistIcon from '../../assets/wishlist.svg';
import cartIcon from '../../assets/whitecart.webp';
import { useState } from "react";
import ReactStars from 'react-rating-star-with-type'
import { setCartArray } from '../utilities/Cart';
import { grtWishlistArray, setWishlistArray } from '../utilities/wishllist';
import toast from 'react-hot-toast';

const GadgetDetails = () => {

    const { gadgetId } = useParams();

    const gadgetIdNum = parseInt(gadgetId);

    const gadgets = useLoaderData();


    const gadgetDetail = gadgets.find(gadget => gadget.product_id === gadgetIdNum);

    let { product_title, product_image, category, price, description, Specification, availability, rating, product_id } = gadgetDetail;

    // Star Rating 

    const [star, setStar] = useState(5);

    const onChange = (nextValue) => {
        setStar(nextValue)
    }

    // Handle Cart 

    const handleCart = (id) => {
        setCartArray(id)
    }

    // Handle Wishlist 

    const handleWishlist = (id) => {
        setWishlistArray(id)
    }

    const [disableWishlist, setDisableWishlist] = useState(false);

    useEffect(() => {
        const allWishlist = grtWishlistArray();
        const gadgetDetail = gadgets.find(gadget => gadget.product_id === gadgetIdNum);
        const isExist = allWishlist.find(id => id == gadgetDetail.product_id);
        console.log(isExist)
        if(isExist){
            setDisableWishlist(true)
        }
        

    },[gadgets]);


    return (
        <div className='sora-font'>
            <div>
                <div className='bg-[#9538E2] h-[420px]'>
                    <h4 className='font-bold text-[32px] text-white text-center pt-8 pb-4'>Product Details</h4>
                    <p className='font-normal text-base text-white text-center max-w-3xl mx-auto pb-8'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className='max-w-7xl mx-auto flex justify-between items-center gap-8 p-8 rounded-3xl border-2 relative -top-52 bg-white'>
                    <div className='w-[50%] h-fit rounded-2xl border flex items-center justify-center'>
                        <img className='w-[90%] p-6 bg-cover object-cover' src={product_image} alt="" />
                    </div>
                    <div className='w-[50%]'>
                        <p className='font-semibold text-[28px]'>{product_title}</p>
                        <p className='font-semibold text-xl mt-3 mb-4'>Price: ${price}</p>
                        {
                            availability ? 
                            <div 
                            className='mb-4 border border-green-800 py-[6px] px-4 font-medium text-sm text-green-800 rounded-[32px] w-fit bg-green-100'>In stock</div> : 
                            <div 
                            className='mb-4 border border-red-800 py-[6px] px-4 font-medium text-sm text-red-800 rounded-[32px] w-fit bg-red-100'>Out of stock</div>
                        }
                        <p className='font-normal text-lg'>{description}</p>
                        <div>
                            <p className='mt-4 mb-3 font-bold text-lg'>Specification:</p>
                            <ol>
                                {
                                    Specification.map((specification , index) => <li className='opacity-70' key={index}>{specification}</li>)
                                }
                            </ol>
                        </div>
                        <p className='mb-5 mt-4 font-bold text-lg inline-flex gap-4'>Rating: <ReactStars
                            onChange={onChange}
                            value={rating}
                            isEdit={false}
                            activeColors={["#F9C004"]}
                        /> {rating}</p>
                        <div className='flex justify-start items-center gap-4'>
                            <Link onClick={() => handleCart(product_id)}><button className='bg-[#9538E2] text-white font-bold text-lg py-3 px-6 rounded-[32px]'>Add To Card <img className="w-9 p-[9px] inline " src={cartIcon} alt="" /></button></Link>
                            <Link onClick={() => handleWishlist(product_id)}><button 
                            disabled={disableWishlist}
                            className={`${disableWishlist ? 'flex items-center justify-center opacity-50 ' : 'flex items-center justify-center'}`}>
                                <img 
                                className={`w-14 p-[10px] border-2 rounded-full bg-slate-300`} src={wishlistIcon} alt="" /></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;