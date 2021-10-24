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
        title={"Pričajmo o novcu"}
        description={
          "Učimo o novcu kako bi stvorili bogatstvo za buduće generacije. Blog o financijama i ekonomiji. Edukativni sadržaj o ulaganju i osobnim financijama."
        }
      />
      <DesktopNav />
      <MobileNav />
      <Homepage />
      <Bio />
      <AboutMe />
      <Bullets />
      <Newsletter />
      <BlogPreview title={'Blog in English'} link={'/blog'} empty={true} />
      <BlogPreview title={'Pričajmo o novcu'} link={'/podcast'} subtitle={'podcast & blog in Croatian'}/>
      <Footer />
    </>
  )
}

export default Index

