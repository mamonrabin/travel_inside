import About from "@/src/components/about/About";
import Satasfied from "@/src/components/about/Satasfied";
import WhyUs from "@/src/components/home/WhyUs";
import SectionHead from "@/src/share/SectionHead";
import React from "react";

const page = () => {
  return (
    <div className="mt-6 pb-10">
      
        <SectionHead
          title="আমাদের সম্পর্কে"
          description="রংতুলি ট্রাভেলস বাংলাদেশের অন্যতম বিশ্বস্ত ভ্রমণ সেবা প্রদানকারী প্রতিষ্ঠান। আমরা আপনার প্রতিটি ভ্রমণকে সহজ, নিরাপদ এবং স্মরণীয় করে তুলতে প্রতিশ্রুতিবদ্ধ।"
        />
    <About/>
    <WhyUs/>
    <Satasfied/>
    </div>
  );
};

export default page;
