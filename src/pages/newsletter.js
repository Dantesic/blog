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
        title={"Pričajmo o novcu"}
        description={
          "Učimo o novcu kako bi stvorili bogatstvo za buduće generacije. Blog o financijama i ekonomiji. Edukativni sadržaj o ulaganju i osobnim financijama."
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