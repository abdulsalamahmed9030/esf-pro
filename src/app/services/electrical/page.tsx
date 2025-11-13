
import ElectricalDesign from '@/app/components/WhatWeDo/ElectricalDesign'
import Footer from '@/app/components/Footer'
import SectionBanner from '@/app/components/SectionBanner'
import React from 'react'

const page = () => {
  return (
    <>
      <SectionBanner
                    title="
           ELECTRICAL SERVICES DESIGN"
                    backgroundImage="/residential.jpg"
                  />
                 <ElectricalDesign />
                 <Footer />
                 
   </>
  )
}

export default page
