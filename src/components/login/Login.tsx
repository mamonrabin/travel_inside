import React from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
             <form className='mt-2'>
                    <input className='px-4 py-3 border rounded outline-none w-full' type="text" placeholder='ফোন নম্বর অথবা ইমেইল' />
                    <input type="submit" value="সাইন ইন" className='bg-blue-500 w-full font-bold hover:bg-[#0B53C3] duration-300 cursor-pointer text-white py-3 rounded mt-4' />

                    <div className='flex justify-center gap-4 mt-4'>
                        <p className='p-3 rounded border hover:border-[#2B7FFF]/50 duration-300 hover:text-[#2B7FFF]/90 cursor-pointer'><FaGoogle /></p>
                        <p className='p-3 rounded border hover:border-[#2B7FFF]/50 duration-300 hover:text-[#2B7FFF]/90 cursor-pointer'><FaFacebookF /></p>
                    </div>
                </form>
        </div>
    );
};

export default Login;