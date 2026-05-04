import ContactForm from "@/src/components/ContactForm";
import SectionHead from "@/src/share/SectionHead";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";

const page = () => {
  return (
    <div className="Container mt-6 pb-10">
      <SectionHead
        title="যোগাযোগ"
        description="আপনার যেকোনো প্রশ্ন বা সহায়তার জন্য আমরা সবসময় প্রস্তুত। আমাদের সাথে যোগাযোগ করুন এবং আপনার ভ্রমণ পরিকল্পনা শুরু করুন।"
      />

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="mt-4">
        <h2 className="text-xl font-bold py-2">যোগাযোগের তথ্য</h2>
        <div className="grid gap-4">
          <div className="border hover:border-[#55BEEF] duration-300 cursor-pointer rounded md:p-8 p-6">
            <p className="flex items-center gap-2">
              <span className="bg-[#55BEEF]/18 text-[#55BEEF] p-3 rounded">
                <FaPhoneAlt />
              </span>{" "}
              <span className="font-bold">ফোন</span>
            </p>
            <p className="mt-2 text-gray-500">+880 1712 345678</p>
            <p className="text-gray-500">+880 1712 345678</p>
          </div>
          <div className="border hover:border-[#55BEEF] duration-300 cursor-pointer rounded md:p-8 p-6">
            <p className="flex items-center gap-2">
              <span className="bg-[#55BEEF]/18 text-[#55BEEF] p-3 rounded">
                <HiOutlineMailOpen />
              </span>{" "}
              <span className="font-bold">ইমেইল</span>
            </p>
            <p className="mt-2 text-gray-500">almamon757@gmail.com</p>
          </div>
          <div className="border hover:border-[#55BEEF] duration-300 cursor-pointer rounded md:p-8 p-6">
            <p className="flex items-center gap-2">
              <span className="bg-[#55BEEF]/18 text-[#55BEEF] p-3 rounded">
                <FaMapLocationDot />
              </span>{" "}
              <span className="font-bold">লোকেশন</span>
            </p>
            <p className="text-gray-500 mt-2">মিরপুর-১, ঢাকা, বাংলাদেশ</p>
          </div>
        </div>
      </div>

      <ContactForm/>
      </div>
    </div>
  );
};

export default page;
