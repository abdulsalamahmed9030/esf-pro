import SecurityCameraBlog from '@/app/components/blogContent/SecurityCameraBlog'
import Footer from '@/app/components/Footer'
import SectionBanner from '@/app/components/SectionBanner'
import React from 'react'

const page = () => {
  return (
    <>
      <SectionBanner
                    title="
             How Security Cameras Deter Crime
"
                    backgroundImage="/residential.jpg"
                  />
                  <SecurityCameraBlog />
                  <Footer />
    </>
  )
}

export default page
