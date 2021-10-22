import React from 'react'

import DesktopNav from '../components/Layout/DesktopNav/DesktopNav'
import MobileNav from '../components/Layout/MobileNav/MobileNav'
import MediaPage from '../components/MediaPage/MediaPage'
import Footer from '../components/Layout/Footer/Footer'

const Media = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <MediaPage />
      <Footer />
    </>
  )
}

export default Media