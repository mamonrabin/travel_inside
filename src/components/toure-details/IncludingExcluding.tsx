import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const IncludingExcluding = () => {
  const includedItems = [
    "আমাদের ভ্রমণসূচি অনুযায়ী দর্শনীয় স্থান ভ্রমণ",
    "আমাদের ভ্রমণসূচি অনুযায়ী খাবার অন্তর্ভুক্ত",
    "ঢাকা – খুলনা – ঢাকা এসি বাস টিকিট",
    "সুন্দরবন জাহাজে কেবিনসহ ০২ রাত থাকা ও খাবারসহ ভ্রমণ",
  ];
  const excludedItems = [
    "ব্যক্তিগত টিপস",
    "ব্যক্তিগত খরচ",
    "যেকোনো ধরনের অ্যালকোহল ও পানীয়",
    "যেকোনো ধরনের ভ্রমণ বীমা",
  ];
  return (
    <div className="mt-4 grid md:grid-cols-2 gap-6">
      <div>
        <h2 className="font-semibold py-4 text-xl">অন্তর্ভুক্ত</h2>
        <ul className="flex flex-col gap-2 text-gray-500">
          {includedItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-[#55BEEF]">
                <FaCheck />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-semibold py-4 text-xl">অন্তর্ভুক্ত নয়</h2>
        <ul className="flex flex-col gap-2 text-gray-500">
          {excludedItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-red-500">
                <FaXmark />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IncludingExcluding;
