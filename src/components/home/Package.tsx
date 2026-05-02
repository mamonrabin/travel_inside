import { packageList } from "@/src/api/packageApi";
import PackageCard from "@/src/cards/PackageCard";
import SectionHead from "@/src/share/SectionHead";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Package = () => {
  return (
    <div className="Container mt-10 pb-10">
      <SectionHead
        title="ট্যুর প্যাকেজ সমূহ"
        description="বেছে নিন আপনার পছন্দের ট্যুর প্যাকেজ এবং শুরু করুন স্মরণীয় ভ্রমণের নতুন অভিজ্ঞতা।"
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8 mt-3">
        {packageList?.slice(0, 6).map((items) => (
          <PackageCard key={items.id} items={items} />
        ))}
      </div>

       <div className="flex items-center justify-center mt-6">
            <button
          className="relative overflow-hidden z-10 flex items-center justify-center gap-1 mt-3 
                  bg-[#262626] text-white text-base font-medium px-4 py-3 rounded 
                  transition-all duration-500 hover:text-white group cursor-pointer"
        >
          <span className="relative z-10 text-sm font-bold">সব প্যাকেজ দেখুন</span>

          <span className="transform group-hover:translate-x-1 relative z-10 transition duration-300">
            <IoIosArrowForward size={16} />
          </span>

          {/* Hover Background Effect */}
          <span
            className="absolute inset-0 bg-[#FBB03B] scale-x-0 origin-left 
                    transition-transform duration-500 group-hover:scale-x-100 z-0"
          ></span>
        </button>
        </div>
    </div>
  );
};

export default Package;
