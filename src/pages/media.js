import React from 'react'

import SEO from '../components/seo'
import DesktopNav from '../components/Layout/DesktopNav/DesktopNav'
import MobileNav from '../components/Layout/MobileNav/MobileNav'
import MediaPage from '../components/MediaPage/MediaPage'
import Footer from '../components/Layout/Footer/Footer'

const Media = () => {
  return (
    <>
      <SEO
        title={"Pričajmo o novcu"}
        description={
          "Učimo o novcu kako bi stvorili bogatstvo za buduće generacije. Blog o financijama i ekonomiji. Edukativni sadržaj o ulaganju i osobnim financijama."
        }
        slug={slug}
      />
      <DesktopNav />
      <MobileNav />
      <MediaPage />
      <Footer />
    </>
  )
}

export default Media