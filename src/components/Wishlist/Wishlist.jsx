import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import WishlistGadget from './WishlistGadget';
import { grtWishlistArray } from '../utilities/wishllist';
import { removeWishlistArray } from '../utilities/wishllist';



const Wishlist = () => {

    const allData = useLoaderData();

    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        const getWishlistArray = grtWishlistArray()
        const wishlistGadgets = allData.filter(gadget => getWishlistArray.includes(gadget.product_id));
        setGadgets(wishlistGadgets);
    }, [allData])

    const handleWishlistDelete = id => {
        removeWishlistArray(id);
        const getWishlistArray = grtWishlistArray();
        setGadgets(getWishlistArray);
    }


    return (
        <div>
            <div className='max-w-7xl mx-auto mt-12 min-h-screen'>
                <div>
                    <p className='font-bold text-2xl'>Wishlist</p>
                </div>
                <div>
                    <div className='flex flex-col gap-8 my-8'>
                        {
                            gadgets.map(gadget => <WishlistGadget handleWishlistDelete={handleWishlistDelete} key={gadget.product_id} gadget={gadget}></WishlistGadget>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;