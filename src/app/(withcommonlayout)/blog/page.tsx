import Blogs from "@/src/components/blogs/Blogs";
import SectionHead from "@/src/share/SectionHead";
import React from "react";

const page = () => {
  return (
    <div className="Container mt-6">
      <SectionHead
        title="ভ্রমণ ব্লগসমূহ"
        description="যাদের তত্ত্বাবধানে পরিচালিত হচ্ছে রংতুলি ট্রাভেলস, তাদের পরিচিতি এবং অভিজ্ঞতা সম্পর্কে জানুন"
      />

      <div>
        <Blogs/>
      </div>
    </div>
  );
};

export default page;
