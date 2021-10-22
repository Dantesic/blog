import React from 'react'

import DesktopNav from '../components/Layout/DesktopNav/DesktopNav'
import MobileNav from '../components/Layout/MobileNav/MobileNav'
import AboutPage from '../components/AboutPage/AboutPage'
import Footer from '../components/Layout/Footer/Footer'

const About = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <AboutPage />
      <Footer />
    </>
  )
}

export default About

