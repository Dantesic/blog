import React from 'react'

import SEO from '../components/seo'
import DesktopNav from '../components/Layout/DesktopNav/DesktopNav'
import MobileNav from '../components/Layout/MobileNav/MobileNav'
import AboutPage from '../components/AboutPage/AboutPage'
import Footer from '../components/Layout/Footer/Footer'

const About = () => {
  return (
    <>
      <SEO
        title={"Pričajmo o novcu"}
        description={
          "Učimo o novcu kako bi stvorili bogatstvo za buduće generacije. Blog o financijama i ekonomiji. Edukativni sadržaj o ulaganju i osobnim financijama."
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

