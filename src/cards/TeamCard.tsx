import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

interface TeamItem {
  name: string;
  title: string;
  image: StaticImageData;
}

interface TeamCardProps {
  item: TeamItem;
}

const TeamCard = ({ item }: TeamCardProps) => {
  return (
    <div className="border border-[#262626]/15 rounded-lg p-2">
      <Image
        src={item.image}
        alt={item.name}
        width={400}
        height={280}
        className="w-full h-75 object-cover rounded-lg"
      />
      <div className="bg-[#FBB03B]/10 p-4 rounded-lg mt-2 flex flex-col items-center text-center">
        <h2 className="font-bold">{item.name}</h2>
        <p className="text-gray-600">{item.title}</p>

        <div className="flex items-center gap-2 mt-4">
          <p className="p-2 bg-white/20 rounded border border-[#262626]/15 hover:border-[#FBB03B]/50 duration-300 cursor-pointer">
            <FaFacebookF size={14} />
          </p>
          <p className="p-2 bg-white/20 rounded border border-[#262626]/15 hover:border-[#FBB03B]/50 duration-300 cursor-pointer">
            <FaInstagram size={14} />
          </p>
          <p className="p-2 bg-white/20 rounded border border-[#262626]/15 hover:border-[#FBB03B]/50 duration-300 cursor-pointer">
            <FaWhatsapp size={14} />

          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
