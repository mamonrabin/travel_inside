import TeamPage from '@/src/components/teampage/TeamPage';
import SectionHead from '@/src/share/SectionHead';
import React from 'react';

const page = () => {
    return (
        <div className="Container mt-6">
      <SectionHead
        title="আমাদের টিম মেম্বারসমূহ"
        description="যাদের তত্ত্বাবধানে পরিচালিত হচ্ছে রংতুলি ট্রাভেলস, তাদের পরিচিতি এবং অভিজ্ঞতা সম্পর্কে জানুন"
      />

      <TeamPage/>
        </div>
    );
};

export default page;