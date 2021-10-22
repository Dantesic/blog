import React from 'react'

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
      <DesktopNav />
      <MobileNav />
      <Homepage />
      <Bio />
      <AboutMe />
      <Bullets />
      <Newsletter />
      <BlogPreview title={'Blog on English'} empty={true} />
      <BlogPreview title={'Pričajmo o novcu'} subtitle={'podcast & blog on Croatian'}/>
      <Footer />
    </>
  )
}

export default Index

