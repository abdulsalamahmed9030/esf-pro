import FireAlarmProtection from '@/app/components/WhatWeDo/FireAlarmProtection'
import Footer from '@/app/components/Footer'
import SectionBanner from '@/app/components/SectionBanner'
import React from 'react'

const page = () => {
  return (
    <>
      <SectionBanner
              title="
                        FIRE ALARM PROTECTION"
              backgroundImage="/residential.jpg"
            />
            <FireAlarmProtection />
            <Footer />
    </>
  )
}

export default page
