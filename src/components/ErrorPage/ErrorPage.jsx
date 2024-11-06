import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <p className='font-extrabold text-[40px]'>No Data Found In This Page</p>
            <Link to={'/'}>
                <button className='font-bold text-xl py-3 px-8 rounded-3xl bg-violet-700 text-white mt-6'>Back To Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;