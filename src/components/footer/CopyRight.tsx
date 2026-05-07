import React from 'react';

const CopyRight = () => {
    return (
        <div className='py-2 flex items-center justify-between Container bg-[#262626] text-white border-t border-[#ffff]/15'>
            <h2 className='md:text-sm text-xs text-gray-400'>কপিরাইট © ২০২৬ আপনার কোম্পানি সংরক্ষিত.</h2>
            <p className='md:text-sm text-[10px] text-gray-400'>Developed by <a href="https://titaswebs.vercel.app/" target="_blank" className='text-[#55BEEF] hover:underline'>Titaswebs</a></p>
        </div>
    );
};

export default CopyRight;