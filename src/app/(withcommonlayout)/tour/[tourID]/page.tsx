import BookingSection from "@/src/components/toure-details/BookingSection";
import ImageGallery from "@/src/components/toure-details/ImageGallery";
import InformationTour from "@/src/components/toure-details/InformationTour";
import React from "react";

const page = () => {
  return (
    <div className="Container py-6">
      <div>
        <h2 className="text-xl font-medium">কক্সবাজার হল বাংলাদেশের একটি প্রতিষ্ঠিত সমুদ্রসৈকত</h2>
        <p className="mt-1 font-medium text-gray-500">ঢাকা - কক্সবাজার</p>
      </div>

      <ImageGallery/>
      <div className="flex lg:flex-row flex-col lg:gap-8 gap-4 mt-4">
        <div className="flex-2">
          <InformationTour/>
        </div>
        <div className="flex-1">
          <BookingSection/>
        </div>
      </div>
    </div>
  );
};

export default page;
