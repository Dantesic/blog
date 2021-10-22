import React from 'react'

import DesktopNav from '../components/Layout/DesktopNav/DesktopNav'
import MobileNav from '../components/Layout/MobileNav/MobileNav'
import NewsletterPage from '../components/NewsletterPage/NewsletterPage'
import Footer from '../components/Layout/Footer/Footer'

const Media = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <NewsletterPage />
      <Footer />
    </>
  )
}

export default Media