import React from "react";

const Subscribe = () => {
  return (
    <div className="Container">
      <div className="bg-[#1766D6] py-6 gap-2 md:px-20 px-4 text-white rounded-t-lg flex lg:flex-row flex-col justify-between lg:items-center">
        <p className="md:text-xl text-base font-semibold md:flex hidden">সর্বশেষ ভ্রমণ সংবাদ ও আপডেট সরাসরি আপনার ইনবক্সে পান।</p>
        <div className="flex items-center gap-2">
          <input 
          className="bg-white border text-[#262626] outline-none px-2 py-2 rounded lg:w-70 w-full"
          type="email" placeholder="আপনার ইমেইল লিখুন" />
          <button className="bg-[#0B53C3] text-white md:text-base text-sm  font-semibold py-2.25 px-4 rounded hover:bg-gray-200 hover:text-[#1766D6] cursor-pointer transition-colors duration-300">
            সাবস্ক্রাইব
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
