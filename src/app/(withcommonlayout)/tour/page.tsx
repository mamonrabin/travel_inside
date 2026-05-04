import TourPackage from "@/src/components/tourpackage/TourPackage";
import SectionHead from "@/src/share/SectionHead";
import React from "react";

const page = () => {
  return (
    <div className="Container mt-6">
      <SectionHead
        title="ট্যুর প্যাকেজ"
        description="আপনার ভ্রমণকে সহজ করতে আমরা প্রদান করি সম্পূর্ণ সেবা"
      />

      <TourPackage />
    </div>
  );
};

export default page;
