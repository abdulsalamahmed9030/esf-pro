import React from 'react'
import SectionBanner from '../components/SectionBanner'
import OurProcess from '../components/OurProcessTwo'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
    <SectionBanner
                  title="
          Our Process"
                  backgroundImage="/residential.jpg"
                />
               <OurProcess />
               <Footer />

    </>
  )
}

export default page
