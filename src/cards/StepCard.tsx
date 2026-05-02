/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const StepCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center relative overflow-hidden text-center gap-2 rounded md:px-4 px-2 py-6 border duration-300 cursor-pointer ${index % 2 === 0 ? "hover:border-[#55BEEF]" : "hover:border-[#FBB03B]"}
      }`}
    >
      <p className={`text-2xl  p-3 rounded text-white ${index % 2 === 0 ? "bg-[#55BEEF]" : "bg-[#FBB03B]"}`}>
        {item.icon}
      </p>
      <p className={`absolute -top-2 -right-2  text-white rounded-full w-8 h-8 flex items-center justify-center ${index % 2 === 0 ? "bg-[#55BEEF]" : "bg-[#FBB03B]"}`}>
        {index + 1}
      </p>
      <h2 className="text-lg font-bold mt-1">{item.title}</h2>

      <p className="text-gray-500">{item.description}</p>
    </div>
  );
};

export default StepCard;
