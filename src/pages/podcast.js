import React from 'react'

import SEO from '../components/seo'
import DesktopNav from '../components/Layout/DesktopNav/DesktopNav'
import MobileNav from '../components/Layout/MobileNav/MobileNav'
import PodcastHomepage from '../components/PodcastHomepage/PodcastHomepage'
import PodcastBio from '../components/PodcastBio/PodcastBio'
import PodcastVideos from '../components/PodcastVideos/PodcastVideos'
import PodcastBlog from '../components/PodcastBlog/PodcastBlog'
import PodcastFooter from '../components/PodcastFooter/PodcastFooter'
import Footer from '../components/Layout/Footer/Footer'

const Podcast = () => {
  return (
    <>
      <SEO
        title={"Pričajmo o novcu"}
        description={
          "Učimo o novcu kako bi stvorili bogatstvo za buduće generacije. Blog o financijama i ekonomiji. Edukativni sadržaj o ulaganju i osobnim financijama."
        }
      />
      <DesktopNav />
      <MobileNav />
      <PodcastHomepage />
      <PodcastBio />
      <PodcastVideos />
      <PodcastBlog />
      <PodcastFooter />
      <Footer />
    </>
  )
}

export default Podcast