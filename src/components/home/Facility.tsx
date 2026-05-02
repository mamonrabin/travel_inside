import { facilityList } from "@/src/api/facilityApi";
import SectionHead from "@/src/share/SectionHead";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Facility = () => {
  return (
    <div className="Container mt-10">
      <SectionHead
        title="আমাদের সেবা সমূহ"
        description="আপনার ভ্রমণকে সহজ করতে আমরা প্রদান করি সম্পূর্ণ সেবা"
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 mt-3">
        {facilityList.map((item) => (
          <div key={item.id} className="flex group flex-col text-center items-center gap-2 p-10 border hover:border-[#55BEEF] duration-300 cursor-pointer rounded-lg">
        
              <p className="text-4xl text-[#55BEEF] bg-[#55BEEF]/15 p-6 rounded-full">{item.icon}</p>
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-gray-500">{item.description}</p>

              <p className="flex items-center gap-2 font-bold mt-2 group-hover:text-[#55BEEF] duration-300 cursor-pointer"><span>আরো জানুন</span> <span className="group-hover:translate-x-2 duration-300"><IoIosArrowForward size={16} /></span></p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facility;
