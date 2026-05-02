
import Banner from '@/src/components/home/banner/Banner';
import Facility from '@/src/components/home/Facility';
import Package from '@/src/components/home/Package';
import TravelArragment from '@/src/components/home/TravelArragment';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner/>
      <Facility/>
      <Package/>
      <TravelArragment/>
    </div>
  );
};

export default page;