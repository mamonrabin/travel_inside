import React from "react";
import { FaUser } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import DayPlan from "./DayPlan";
import IncludingExcluding from "./IncludingExcluding";

const InformationTour = () => {
  return (
    <div className="">
      <div>
        <h2 className="lg:text-2xl text-xl font-medium">
          কক্সবাজার হল বাংলাদেশের একটি প্রতিষ্ঠিত সমুদ্রসৈকত
        </h2>

        <p className="py-2">
          <span className="text-2xl font-bold text-[#55BEEF]">৳16,500</span>
          <span className="text-sm text-gray-400">/ প্রতি ব্যক্তি</span>
        </p>
        <div className="flex items-center md:gap-8 gap-4">
          <p className="flex items-center gap-1 font-semibold text-gray-500">
            <span className="text-[#55BEEF] text-xl">
              <IoTime />
            </span>{" "}
            <span className="md:text-base text-sm">সময়কাল: ৩ দিন ২ রাত</span>
          </p>
          <p className="flex items-center gap-1 font-semibold text-gray-500">
            <span className="text-[#55BEEF] text-base">
              <FaUser />
            </span>{" "}
             <span className="md:text-base text-sm">সর্বোচ্চ ব্যক্তি সংখ্যা : ২</span>
          </p>
        </div>

        <p className="mt-4 text-gray-500">
          বাংলাদেশের পাহাড়ি সৌন্দর্যের তালিকায় বগালেক–কেওক্রাডং এমন এক ভ্রমণ
          রুট, যা প্রতিটি ট্রাভেলারকে অন্যরকম অভিজ্ঞতা উপহার দেয়। সবুজ পাহাড়,
          নীল লেক, মেঘে ঢাকা চূড়া, ট্রাইবাল সংস্কৃতি, আর মন জুড়িয়ে দেওয়া
          আঁকাবাঁকা পাহাড়ি রাস্তা—সব মিলিয়ে এই যাত্রা যেন এক রোমাঞ্চকর অভিযানের
          নাম। রংতুলি ট্যুরস এন্ড ট্রাভেলস-এর স্পেশাল বগালেক–কেওক্রাডং ট্যুর
          আপনাকে নিয়ে যাবে ঠিক সেই সৌন্দর্যের গভীরে।
        </p>
        <p className="mt-4 text-gray-500">
          যাত্রা শুরু হয় বান্দরবান থেকে রুমা বাজার পর্যন্ত, যেখানে পাহাড়ি
          পরিবেশ, স্থানীয় মানুষের সহজ-সরল জীবন আর শান্ত বাতাস আপনাকে স্বাগত
          জানায়। রুমা থেকে ট্রেক বা গাড়িতে যাত্রা করতে করতে সামনে খুলে যায়
          পাহাড়ের এক অনন্য চিত্র—প্রতিটি বাঁকে নতুন দৃশ্য, নতুন রঙ, নতুন
          অনুভূতি। সেই আঁকাবাঁকা পাহাড়ি রাস্তা যেন প্রতিটি মুহূর্তে মনকে ছুঁয়ে
          যায়।
        </p>

        <DayPlan/>
        <IncludingExcluding/>

        <h2 className="py-6 text-base font-semibold text-gray-500">ঢাকা - সুন্দরবন - ঢাকা</h2>
      </div>
    </div>
  );
};

export default InformationTour;
