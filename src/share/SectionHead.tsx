import React from 'react';

interface SectionHeadProps {
    title: string;
    description: string;
}

const SectionHead = ({title, description}: SectionHeadProps) => {
    return (
        <div className='flex flex-col items-center justify-center gap-2 py-6'>
            <h2 className='md:text-4xl text-3xl font-bold'>{title}</h2>
            <p className='text-lg text-gray-500 text-center lg:w-200'>{description}</p>
        </div>
    );
};

export default SectionHead;