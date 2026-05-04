import { satasfiedList } from '@/src/api/satasfiedApi';
import React from 'react';

const Satasfied = () => {
    return (
        <div className='Container grid lg:grid-cols-4 md:grid-cols-3 md:gap-2 gap-10 py-20'>
            {
                satasfiedList.map(item => <div key={item.id} className='flex flex-col justify-center items-center'>
                    <h2 className='text-4xl font-bold text-[#55BEEF]'>{item.level}+</h2>
                    <p className='font-bold mt-2 text-gray-500'>{item.title}</p>
                </div>)
            }
        </div>
    );
};

export default Satasfied;