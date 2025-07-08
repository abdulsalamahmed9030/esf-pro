import Footer from "@/app/components/Footer";
import SectionBanner from "@/app/components/SectionBanner";
import SecuritySolutions from "@/app/components/WhatWeDo/SecuritySolutions";
import React from "react";

const page = () => {
  return (
    <>
      <SectionBanner
        title="
                   SECURITY ALARM & CCTV SOLUTIONS"
        backgroundImage="/residential.jpg"
      />
      <SecuritySolutions />
      <Footer />
    </>
  );
};

export default page;
