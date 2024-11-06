import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Gadget from '../Gadget/Gadget';

const GadgetCards = () => {

    const {category} = useParams()

    const [gadgets, setGadgets] = useState([]);

    useEffect( () => {
        fetch('/gadget.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    } ,[])
    
    const [filterGadget, setFilterGadget] = useState([]);

    useEffect(() => {
        const gadgetByCategory = [...gadgets].filter(gadget => gadget.category === category);
        setFilterGadget(gadgetByCategory);
    },[gadgets, category])

    return (
        <div className='grid grid-cols-3 gap-6'>
            {
                filterGadget.map((gadget, index) => <Gadget key={index} gadget={gadget}></Gadget>)
            }
        </div>
    );
};

export default GadgetCards;