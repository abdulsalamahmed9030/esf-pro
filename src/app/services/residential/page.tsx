import Footer from '@/app/components/Footer'
import ResidentialPage from '@/app/components/Residential'
import SectionBanner from '@/app/components/SectionBanner'
import React from 'react'

const page = () => {
  return (
    <>
      <SectionBanner
              title="Residential Services"
              backgroundImage="/residential.jpg"
            />
            <ResidentialPage />
            <Footer />
    </>
  )
}

export default page
