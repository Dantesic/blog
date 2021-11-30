import React from 'react'

import Seo from '../components/seo'
import DesktopNav from '../components/Layout/DesktopNav/DesktopNav'
import MobileNav from '../components/Layout/MobileNav/MobileNav'
import ServicesPage from '../components/ServicesPage/ServicesPage'
import Footer from '../components/Layout/Footer/Footer'

const Services = () => {
  return (
    <>
      <Seo
        title={"Services | Dorian Antešić"}
        description={
          "Dorian Antešić is an economist, investor & consultant focused on building a strong human and through that - Family Wealth. Research fields: Crypto, Family Wealth and Philosophy."
        }
      />
      <DesktopNav />
      <MobileNav />
      <ServicesPage />
      <Footer />
    </>
  )
}

export default Services

