import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { grtCartArray, removeCartArray } from '../utilities/Cart';
import CartGadget from './CartGadget';
import successImg from '../../assets/Group.png'

const Cart = () => {
    const allData = useLoaderData();

    const [gadgets, setGadgets] = useState([]);

    const [gadgetTotal, setGadgetTotal] = useState(0);

    const navigate = useNavigate();

    const [disableCloseBtn, setDisableCloseBtn] = useState(false)


    useEffect(() => {

        const getCartArray = grtCartArray();

        const cartGadgets = allData.filter(gadget => getCartArray.includes(gadget.product_id));

        setGadgets(cartGadgets);

        if(getCartArray.length == 0){
            setDisableCloseBtn(true)
        }

        console.log(getCartArray)
        console.log(disableCloseBtn)
    }, [allData]);

    // Handle Sort 

    const handleSort = () => {

        const sortedGadgets = [...gadgets].sort((a, b) => b.price - a.price);
        setGadgets(sortedGadgets);

    };

    // Handle Delete 

    const handleCartDelete = id => {

        removeCartArray(id);
        const updatedCartArray = grtCartArray();

        const updatedGadgets = allData.filter(gadget => updatedCartArray.includes(gadget.product_id));
        setGadgets(updatedGadgets);
    };

    // Handle Purchase 


    const handlePurchase = () => {

        let getCartArray = grtCartArray();
        if(getCartArray.length == 0){
            return;
        }
        getCartArray = [];
        localStorage.setItem('cart', getCartArray)
        setGadgets(getCartArray)

        document.getElementById('my_modal_1').showModal();

    }


    const handlePurchaseClose = () => {

        navigate('/')

    }

    useEffect(() => {

        const priceArray = gadgets.map(gadget => gadget.price)
        const tatalCost = priceArray.reduce((previous, current) => previous + current, 0)
        setGadgetTotal(tatalCost);

    }, [gadgets])

    return (
        <div>
            <div className='max-w-7xl mx-auto mt-12 min-h-screen'>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='font-bold text-2xl'>Cart</p>
                    </div>
                    <div className='flex justify-end items-center gap-4'>
                        <p className='font-bold text-2xl mr-2'>Total cost: ${gadgetTotal}</p>
                        <button onClick={handleSort} className='py-3 px-6 rounded-[32px] text-[#9538E2] border-2 border-[#9538E2] font-semibold'>
                            Sort by Price
                        </button>
                        <button 
                        onClick={handlePurchase} 
                        disabled={disableCloseBtn} 
                        className={`py-3 px-6 rounded-[32px] text-white font-semibold bg-[#9538E2] ${disableCloseBtn ? 'opacity-50' : ''}`}>
                            Purchase
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-8 my-8'>
                    {gadgets.map((gadget, index) => (
                        <CartGadget key={index} handleCartDelete={handleCartDelete} gadget={gadget} />
                    ))}
                </div>
            </div>

            {/* Modal  */}

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box flex flex-col justify-center items-center">
                    <img className='mb-6' src={successImg} alt="" />
                    <h3 className="font-bold text-2xl mb-3">Payment Successful</h3>
                    <p className="py-4 text-lg opacity-70 border-t-2 ">Thanks for purchasing.</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button 
                            onClick={() => handlePurchaseClose('close')} className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Cart;
