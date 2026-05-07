import React from 'react';

const BookForm = () => {
    return (
        <div className='border md:px-8 md:py-8 p-4 rounded'>
            <h2 className='text-lg font-semibold'>ব্যক্তিগত তথ্য</h2>

            <form className='mt-4 flex flex-col gap-2'>
                <div>
                    <label htmlFor="name" className='block text-base font-medium text-gray-500'>নাম <span className='text-red-800'>*</span></label>
                    <input type="text" id="name" className='mt-1 block w-full border border-gray-300 rounded  p-2 outline-none' placeholder='আপনার নাম লিখুন' />
                </div>
                <div>
                    <label htmlFor="phone" className='block text-base font-medium text-gray-500'>মোবাইল <span className='text-red-800'>*</span></label>
                    <input type="text" id="phone" className='mt-1 block w-full border border-gray-300 rounded  p-2 outline-none' placeholder='আপনার মোবাইল নম্বর লিখুন' />
                </div>
                <div>
                    <label htmlFor="email" className='block text-base font-medium text-gray-500'>ইমেইল (অপশনাল)</label>
                    <input type="text" id="email" className='mt-1 block w-full border border-gray-300 rounded  p-2 outline-none' placeholder='আপনার ইমেইল লিখুন' />
                </div>

                 <div>
                    <label htmlFor="address" className='block text-base font-medium text-gray-500'>ঠিকানা  <span className='text-red-800'>*</span></label>
                    <input type="text" id="address" className='mt-1 block w-full border border-gray-300 rounded  p-2 outline-none' placeholder='আপনার ঠিকানা লিখুন' />
                </div>
                 <div>
                    <label htmlFor="district" className='block text-base font-medium text-gray-500'>জেলা  <span className='text-red-800'>*</span></label>
                    <input type="text" id="district" className='mt-1 block w-full border border-gray-300 rounded  p-2 outline-none' placeholder='আপনার জেলা লিখুন' />
                </div>
            </form>
        </div>
    );
};

export default BookForm;