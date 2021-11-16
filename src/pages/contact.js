import React from 'react'

import Seo from '../components/seo'
import DesktopNav from '../components/Layout/DesktopNav/DesktopNav'
import MobileNav from '../components/Layout/MobileNav/MobileNav'
import ContactPage from '../components/ContactPage/ContactPage'
import Footer from '../components/Layout/Footer/Footer'

const Blog = () => {
  return (
    <>
      <Seo
        title={"Contact"}
        description={
          "Contact of Dorian Antešić. Send a question or a business proposal."
        }
      />
      <DesktopNav />
      <MobileNav />
      <ContactPage />
      <Footer />
    </>
  )
}

export default Blog

