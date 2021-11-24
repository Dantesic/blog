import React from 'react'

import Seo from '../components/seo'
import DesktopNav from '../components/Layout/DesktopNav/DesktopNav'
import MobileNav from '../components/Layout/MobileNav/MobileNav'
import MediaPage from '../components/MediaPage/MediaPage'
import Footer from '../components/Layout/Footer/Footer'

const Media = () => {
  return (
    <>
      <Seo
        title={"Media | Dorian Antešić"}
        description={
          "Media coverings of Dorian Antešić. Interviews, articles, and appearances. "
        }
      />
      <DesktopNav />
      <MobileNav />
      <MediaPage />
      <Footer />
    </>
  )
}

export default Media