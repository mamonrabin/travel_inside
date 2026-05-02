import { chooseList } from "@/src/api/chooseApi";
import SectionHead from "@/src/share/SectionHead";
import React from "react";

const WhyUs = () => {
  return (
    <div className="Container md:mt-10 mt-6 pb-10">
      <SectionHead
        title="কেন আমাদের বেছে নেবেন"
        description="আমরা প্রতিশ্রুতিবদ্ধ আপনার ভ্রমণকে সহজ এবং আরামদায়ক করতে।"/>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 mt-3 lg:px-12">
        {chooseList.map((item,index) => (
          <div
            key={item.id}
            className="flex group flex-col text-center items-center gap-2 px-6 py-10 border hover:border-[#55BEEF] duration-300 cursor-pointer rounded"
          >
            <p className={`text-2xl text-[#55BEEF]  p-4 rounded ${index%2 === 0 ? "bg-[#55BEEF]/15" : "bg-[#FBB03B]/15 text-[#FBB03B]"}`}>
              {item.icon}
            </p>
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
