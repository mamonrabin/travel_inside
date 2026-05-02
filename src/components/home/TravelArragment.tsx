import { managementList } from '@/src/api/managmentApi';
import SectionHead from '@/src/share/SectionHead';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const TravelArragment = () => {
    return (
       <div className="Container mt-10">
      <SectionHead
        title="যাতায়াত ব্যবস্থা"
        description="আপনার পছন্দ অনুযায়ী বাস, ট্রেন বা বিমানে ভ্রমণ করুন এবং আপনার যাত্রা শুরু করুন সহজে এবং আরামে।"
      />
            
            <div className='grid lg:grid-cols-2 gap-4 mt-3'>
                {
                    managementList.map(item => (
                        <div key={item.id} className={`border p-10 rounded duration-300 cursor-pointer ${item.category === 'bus' ? 'hover:border-[#55BEEF]' : item.category === 'flight' ? 'hover:border-[#FBB03B]' : ''}`}>
                            <p className={`text-white text-4xl p-3 rounded inline-flex ${item.category === 'bus' ? 'bg-[#55BEEF]' : item.category === 'flight' ? 'bg-[#FBB03B]' : ''}`}>{item.icon}</p>
                            <h3 className='mt-4 text-lg font-bold'>{item.title}</h3>
                            <p className='mt-2 text-gray-500'>{item.description}</p>
                            <ul className='mt-2'>
                                {item.ficility.map((facility, index) => (
                                    <li key={index} className='flex items-center gap-2 text-gray-500'>
                                        <span className={`text-[#55BEEF] ${item.category === 'bus' ? 'text-[#55BEEF]' : item.category === 'flight' ? 'text-[#FBB03B]' : ''}`}><FaCheck size={12} /></span>
                                        <span>{facility}</span>
                                        </li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TravelArragment;