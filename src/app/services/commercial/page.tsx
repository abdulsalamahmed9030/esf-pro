

import Commercial from '@/app/components/commercial'
import Footer from '@/app/components/Footer'
import SectionBanner from '@/app/components/SectionBanner'
import React from 'react'

const page = () => {
  return (
    <>
      <SectionBanner
                    title="Commercial Services"
                    backgroundImage="/residential.jpg"
                  />
                  <Commercial />
                <Footer />
    </>
  )
}

export default page
