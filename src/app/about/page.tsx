import React from 'react'
import SectionBanner from '../components/SectionBanner'
import ServiceIntro from '../components/ServiceIntro'
import ViewAllProjectsBanner from '../components/ViewAllProjects'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
      <SectionBanner title="Residential Service" backgroundImage="/residential.jpg" />
      <ServiceIntro />
      <ViewAllProjectsBanner title="READ MORE" href="/our-process" />
      <Footer />
    </>
  )
}

export default page
