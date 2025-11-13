import React from 'react'
import SectionBanner from '../components/SectionBanner'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
      <SectionBanner
              title="
      Gallery"
              backgroundImage="/residential.jpg"
            />
            <Gallery />
            <Footer />
    </>
  )
}

export default page
