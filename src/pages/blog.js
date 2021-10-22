import React from 'react'

import DesktopNav from '../components/Layout/DesktopNav/DesktopNav'
import MobileNav from '../components/Layout/MobileNav/MobileNav'
import BlogPage from '../components/BlogPage/BlogPage'
import Footer from '../components/Layout/Footer/Footer'

const Blog = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <BlogPage />
      <Footer />
    </>
  )
}

export default Blog

