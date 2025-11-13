import ElectricalSafetyBlog from '@/app/components/blogContent/ElectricalSafetyBlog'
import Footer from '@/app/components/Footer'
import SectionBanner from '@/app/components/SectionBanner'
import React from 'react'

const page = () => {
  return (
    <>
     <SectionBanner
             title="
     Top 5 Electrical Safety Tips for Homeowners"
             backgroundImage="/residential.jpg"
           /> 
           <ElectricalSafetyBlog />
           <Footer />
    </>
  )
}

export default page
