import React from 'react';

const ContactForm = () => {
    return (
        <div className='mt-8'>
            <h2 className="text-xl font-bold pb-4">আমাদের লিখুন</h2>

            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-base font-medium text-gray-700">
                        নাম
                    </label>
                    <input
                        type="text"
                        placeholder='নাম লিখুন'
                        className="block rounded px-4 py-1 w-full border outline-none"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-base font-medium text-gray-700">
                        ইমেইল
                    </label>
                    <input
                        type="email"
                        placeholder='ইমেইল লিখুন'
                        className="block rounded px-4 py-1 w-full border outline-none"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-base font-medium text-gray-700">
                        ফোন নাম্বার 
                    </label>
                    <input
                        type="tel"
                        placeholder='ফোন নাম্বার লিখুন'
                        className="block rounded px-4 py-1 w-full border outline-none"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-base font-medium text-gray-700">
                        বার্তা
                    </label>
                    <textarea
                        placeholder='আপনার মূল্যবান বার্তা লিখুন...'
                        rows={4}
                        className="block rounded px-4 py-1 w-full border outline-none"
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className="inline-flex cursor-pointer items-center px-4 py-2 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-[#55BEEF] hover:bg-[#1c79a5] duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        পাঠিয়ে দিন
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;