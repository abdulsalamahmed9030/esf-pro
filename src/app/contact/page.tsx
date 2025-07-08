import React from 'react'
import SectionBanner from '../components/SectionBanner'
import Form from '../components/Form'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
      <SectionBanner
              title="
      Contact Form"
              backgroundImage="/residential.jpg"
            />
            <Form />
            <Footer />
    </>
  )
}

export default page
