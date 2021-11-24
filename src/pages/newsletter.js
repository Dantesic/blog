import React from 'react'

import Seo from '../components/seo'
import DesktopNav from '../components/Layout/DesktopNav/DesktopNav'
import MobileNav from '../components/Layout/MobileNav/MobileNav'
import NewsletterPage from '../components/NewsletterPage/NewsletterPage'
import Footer from '../components/Layout/Footer/Footer'

const Media = () => {
  return (
    <>
      <Seo
        title={"Newsletter | Dorian Antešić"}
        description={
          "A newsletter focused on building Family Wealth. I send private emails with the aim of building a strong human and through that - Family Wealth. Finance, Economics & Philosophy."
        }
      />
      <DesktopNav />
      <MobileNav />
      <NewsletterPage />
      <Footer />
    </>
  )
}

export default Media