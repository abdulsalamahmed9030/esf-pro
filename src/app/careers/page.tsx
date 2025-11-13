import React from "react";
import SectionBanner from "../components/SectionBanner";
import CareersIntro from "../components/Careers";
import CareerHighlights from "../components/CareerHighlights";
import CareerStats from "../components/CareerStats";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <SectionBanner
        title="
Careers"
        backgroundImage="/residential.jpg"
      />
      <CareersIntro />
      <CareerHighlights />
      <CareerStats />
      <Footer />
      
    </>
  );
};

export default page;
