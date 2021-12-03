import React from 'react'

import Seo from '../components/seo'
import DesktopNav from '../components/Layout/DesktopNav/DesktopNav'
import MobileNav from '../components/Layout/MobileNav/MobileNav'
import Homepage from '../components/Homepage/Homepage'
import Bio from '../components/Bio/Bio'
import AboutMe from '../components/AboutMe/AboutMe'
import Bullets from '../components/Bullets/Bullets'
import Newsletter from '../components/Newsletter/Newsletter'
import BlogPreview from '../components/BlogPreview/BlogPreview'
import Footer from '../components/Layout/Footer/Footer'

const Index = () => {
  return (
    <>
      <Seo
        title={"Dorian Antešić | Economist, Investor & Consultant"}
        description={
          "Dorian Antešić is an economist, investor & consultant focused on building a strong human and through that -  Family Wealth. Research fields: Crypto, Family Wealth and Philosophy."
        }
      />
      <DesktopNav />
      <MobileNav />
      <Homepage />
      <Bio />
      <AboutMe />
      <Bullets />
      <Newsletter />
      <BlogPreview title={'Learn'} link={'/learn'} />
      <Footer />
    </>
  )
}

export default Index

