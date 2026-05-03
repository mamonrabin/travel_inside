
import Destination from '@/src/components/home/Destination';
import Banner from '@/src/components/home/banner/Banner';
import Facility from '@/src/components/home/Facility';
import Package from '@/src/components/home/Package';
import TravelArragment from '@/src/components/home/TravelArragment';
import WhyUs from '@/src/components/home/WhyUs';
import WorkStep from '@/src/components/home/WorkStep';
import React from 'react';
import Team from '@/src/components/home/Team';
import Reviews from '@/src/components/home/Reviews';

const page = () => {
  return (
    <div>
      <Banner/>
      <Facility/>
      <Package/>
      <TravelArragment/>
      <WorkStep/>
      <WhyUs/>
      <Destination/>
      <Team/>
      <Reviews/>
    </div>
  );
};

export default page;