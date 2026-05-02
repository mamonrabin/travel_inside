
import Banner from '@/src/components/home/banner/Banner';
import Facility from '@/src/components/home/Facility';
import Package from '@/src/components/home/Package';
import TravelArragment from '@/src/components/home/TravelArragment';
import WorkStep from '@/src/components/home/WorkStep';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner/>
      <Facility/>
      <Package/>
      <TravelArragment/>
      <WorkStep/>
    </div>
  );
};

export default page;