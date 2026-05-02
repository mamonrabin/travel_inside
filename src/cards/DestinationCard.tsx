/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const DestinationCard = ({ item }: { item: any }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="h-75 relative overflow-hidden rounded">
        <Image
          className="w-full h-full overflow-hidden object-cover rounded transition-all duration-700 ease-in-out
      group-hover:scale-110
      group-hover:rotate-1"
          src={item.image}
          alt="image"
          width={520}
          height={520}
        />

        <div
          className="
      absolute inset-0 bg-black/50
      transition-all duration-500 rounded
      group-hover:bg-black/25
    "
        ></div>
      </div>
      <div className="bottom-0 absolute text-white p-4">
        <h2 className="flex items-center gap-1 text-lg font-bold py-1">
          <FaMapMarkerAlt />
          {item.title}
        </h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
