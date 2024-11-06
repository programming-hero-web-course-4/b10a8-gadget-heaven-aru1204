import React from 'react';
import '../../index.css'
import { Helmet } from 'react-helmet';
import toast from "react-hot-toast";


const ContactUs = () => {

    const handlesubmit = ()=> {
        toast.success('Message Sent Successful');
    }

    return (
        <div className='sora-font'>
            <Helmet>
                <title>Contact Us | Gadget Heaven</title>
                <meta name="description" content="Gadget Heaven" />
            </Helmet>
            <div className='bg-[#9538E2]'>
                <h4 className='font-bold text-[32px] text-white text-center pt-8 pb-4'>Contact Us</h4>
                <p className='font-normal text-base text-white text-center max-w-3xl mx-auto pb-8'>Fill out the form below and we'll get back to you as soon as possible</p>
            </div>
            <div className='py-14 bg-gray-200 rounded-2xl'>
                <div className='max-w-[318px] mx-auto'>
                <div className='flex flex-col gap-3 items-start justify-center'>

                    <label className='pl-2' htmlFor="">Name</label>
                    <input required type="text" placeholder="Type your name" className="input input-bordered w-full max-w-xs mb-3" />

                    <label className='pl-2' htmlFor="">Subject</label>
                    <input required type="text" placeholder="Type message subject" className="input input-bordered w-full max-w-xs mb-3" />

                    <label className='pl-2' htmlFor="">Message</label>
                    <textarea
                        required
                        placeholder="Type message"
                        className="textarea textarea-bordered textarea-md w-full max-w-xs mb-3"></textarea>
                    <button onClick={handlesubmit} className="py-3 mb-3 px-8 border-2 bg-[#9538E2] text-white text-lg w-full font-bold rounded-xl">Submit message</button>
                </div>
                </div>
            </div>
        </div>

    );
};

export default ContactUs;