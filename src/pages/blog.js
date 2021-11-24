import React from 'react'

import Seo from '../components/seo'
import DesktopNav from '../components/Layout/DesktopNav/DesktopNav'
import MobileNav from '../components/Layout/MobileNav/MobileNav'
import BlogPage from '../components/BlogPage/BlogPage'
import Footer from '../components/Layout/Footer/Footer'

const Blog = () => {
  return (
    <>
      <Seo
        title={"Learn | Dorian Antešić"}
        description={
          "Learn how to become a strong human and build Family Wealth. Topics covered: Crypto, Finance, Economics, and Philosophy."
        }
      />
      <DesktopNav />
      <MobileNav />
      <BlogPage />
      <Footer />
    </>
  )
}

export default Blog

