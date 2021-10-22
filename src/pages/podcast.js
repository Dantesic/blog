import React from 'react'

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