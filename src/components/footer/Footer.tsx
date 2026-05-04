import React from "react";
import logo from "@/src/assets/logo/logo-01.png";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { menuItems } from "@/src/share/MenuItems";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="Container bg-[#262626] py-12 text-white">
      <div className="flex flex-wrap gap-8">
        <div className="flex-2">
          <Image src={logo} alt="Logo" width={150} height={50} />
          <p className="w-80 mt-4 text-gray-300">
            বাস, ট্রেন বা বিমানে বাংলাদেশের যেকোনো প্রান্তে ভ্রমণ করুন। আমরা
            প্রদান করি সম্পূর্ণ দেশীয় ট্যুর প্যাকেজ, টিকেট বুকিং এবং হোটেল
            সুবিধা।
          </p>
          <div className="mt-4 flex items-center gap-2">
            <p className="border border-[#ffffff]/50 text-[#ffffff]/80 hover:text-[#ffffff] hover:border-[#ffffff]/50 cursor-pointer duration-300 rounded p-2">
              <FaFacebookF size={14} />
            </p>
            <p className="border border-[#ffffff]/50 text-[#ffffff]/80 hover:text-[#ffffff] hover:border-[#ffffff]/50 cursor-pointer duration-300 rounded p-2">
              <FaInstagram size={14} />
            </p>
            <p className="border border-[#ffffff]/50 text-[#ffffff]/80 hover:text-[#ffffff] hover:border-[#ffffff]/50 cursor-pointer duration-300 rounded p-2">
              <FaYoutube size={14} />
            </p>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="font-bold pb-4">দ্রুত লিংক</h2>
          <ul className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="text-gray-300 hover:text-[#55BEEF] duration-300 cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-bold pb-4">সেবাসমূহ</h2>
          <ul className="flex flex-col gap-1">
            <li className="text-gray-300 hover:text-[#55BEEF] duration-300 cursor-pointer">
              বাস টিকেট
            </li>
            <li className="text-gray-300 hover:text-[#55BEEF] duration-300 cursor-pointer">
              অভ্যন্তরীন ফ্লাইট
            </li>
            <li className="text-gray-300 hover:text-[#55BEEF] duration-300 cursor-pointer">
              হোটেল বুকিং
            </li>
            <li className="text-gray-300 hover:text-[#55BEEF] duration-300 cursor-pointer">
              ট্যুর প্যাকেজ
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-bold pb-4">যোগাযোগ</h2>

          <div className="text-gray-300">
            <div className="flex items-center gap-3">
              <p className="p-2 border border-[#ffffff]/50 text-[#ffffff]/80 rounded inline-flex">
                <FaPhoneAlt size={12} />
              </p>
              <p className="flex flex-col">
                <span>+880 01746770324</span> <span>+880 01234567890</span>
              </p>
            </div>
            <p className="flex items-center gap-2 mt-2">
              <span>
                <FaWhatsapp />
              </span>{" "}
              <span>+880 01746770324</span>
            </p>
            <p className="flex items-center gap-2 mt-2">
              <span>
                <MdOutlineEmail />
              </span>{" "}
              <span>almamon757@gmail.com</span>
            </p>
            <p className="flex items-center gap-2 mt-2">
              <span>
                <FaMapMarkerAlt />
              </span>{" "}
              <span>মিরপুর-১, ঢাকা, বাংলাদেশ</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
