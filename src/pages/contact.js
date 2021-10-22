import React from 'react'

import DesktopNav from '../components/Layout/DesktopNav/DesktopNav'
import MobileNav from '../components/Layout/MobileNav/MobileNav'
import ContactPage from '../components/ContactPage/ContactPage'
import Footer from '../components/Layout/Footer/Footer'

const Blog = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <ContactPage />
      <Footer />
    </>
  )
}

export default Blog

