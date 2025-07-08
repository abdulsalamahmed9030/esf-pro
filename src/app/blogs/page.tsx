import React from 'react'
import SectionBanner from '../components/SectionBanner'
import ViewAllProjectsBanner from '../components/ViewAllProjects'
import Footer from '../components/Footer'
import Blog from '../components/Blog'

const page = () => {
  return (
    <>
      <SectionBanner
              title="
      Blogs"
              backgroundImage="/residential.jpg"
            />
            <Blog />
              <ViewAllProjectsBanner title="READ MORE" href="/our-process" />
             <Footer/>
    </>
  )
}

export default page
