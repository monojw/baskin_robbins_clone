import React from 'react';
import MainBanner from '../components/MainBanner';
import EventSection from '../components/EventSection';
import MenuSection from '../components/MenuSection';
import StoreSection from '../components/StoreSection';
import SnsSection from '../components/SnsSection';

const Content = () => {
  return (
    <>
      {/* MAIN BANNER */}
      <MainBanner />

      {/* EVENT SECTION */}
      <EventSection />

      {/* MENU SECTION */}
      <MenuSection />

      {/* STORE SECTION */}
      <StoreSection />

      {/* SNS SECTION */}
      <SnsSection />
    </>
  );
};

export default Content;
