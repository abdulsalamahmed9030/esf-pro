import React, { Suspense } from 'react';
import Navbar from '../components/Navbar';
import SectionBanner from '../components/SectionBanner';
import ViewAllProjectsBanner from '../components/ViewAllProjects';
import Footer from '../components/Footer';
import Services from '../components/Services';

const page = () => {
  return (
    <>
      <Navbar />
      <SectionBanner
        title="Services"
        backgroundImage="/residential.jpg"
      />

      <Suspense fallback={<div className="text-white text-center py-20">Loading Services...</div>}>
        <Services /> {/* ✅ This now includes SolutionsWeProvide internally */}
      </Suspense>

      <ViewAllProjectsBanner title="READ MORE" href="/our-process" />
      <Footer />
    </>
  );
};

export default page;
