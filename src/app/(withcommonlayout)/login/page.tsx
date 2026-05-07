import Login from '@/src/components/login/Login';
import React from 'react';

const page = () => {
    return (
        <div className='Container mt-25 py-8 lg:px-80 px-8'>
            <div className='border lg:p-12 p-6'>
                <h1 className='text-xl font-bold mb-4 text-center'>রংতুলি ট্রাভেলস আপনাকে স্বাগতম।</h1>
                <p className='text-base text-gray-500 font-medium'>সাইন ইন</p>

               <Login/>
            </div>
        </div>
    );
};

export default page;