import FireAlarmBlog from '@/app/components/blogContent/FireAlarmBlog'
import Footer from '@/app/components/Footer'
import SectionBanner from '@/app/components/SectionBanner'
import React from 'react'

const page = () => {
  return (
    <>
      <SectionBanner
                   title="
           Fire Alarm Systems: What You Should Know"
                   backgroundImage="/residential.jpg"
                 /> 
                <FireAlarmBlog />
                <Footer />
    </>
  )
}

export default page
