import React from 'react'

import Seo from '../components/seo'
import DesktopNav from '../components/Layout/DesktopNav/DesktopNav'
import MobileNav from '../components/Layout/MobileNav/MobileNav'
import AboutPage from '../components/AboutPage/AboutPage'
import Footer from '../components/Layout/Footer/Footer'

const About = () => {
  return (
    <>
      <Seo
        title={"About"}
        description={
          "Dorian Antešić is an economist, investor & consultant focused on building a strong human and through that - Family Wealth. Research fields: Crypto, Family Wealth and Philosophy."
        }
      />
      <DesktopNav />
      <MobileNav />
      <AboutPage />
      <Footer />
    </>
  )
}

export default About

