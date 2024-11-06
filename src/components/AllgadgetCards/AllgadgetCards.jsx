import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const AllgadgetCards = () => {

    const [gadgets, setGadgets] = useState([]);

    useEffect( () => {
        fetch('/gadget.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    } ,[])

    return (
        <div className='grid grid-cols-3 gap-6'>
            {
                gadgets.map((gadget, index) => <Gadget key={index} gadget={gadget}></Gadget>)
            }
        </div>
    );
};

export default AllgadgetCards;