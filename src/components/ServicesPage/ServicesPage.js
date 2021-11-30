import React from 'react'
import { Wrapper } from './styles'

import ServicesLanding from './ServicesLanding/ServicesLanding'
import ServicesAbout from './ServicesAbout/ServicesAbout'
import ServicesProducts from './ServicesProducts/ServicesProducts'
import ServicesSponsors from './ServicesSponsors/ServicesSponsors'
import ServicesFooter from './ServicesFooter/ServicesFooter'
import ServicesSocial from './ServicesSocial/ServicesSocial'

const ServicesPage = () => {
    return (
        <Wrapper>
            <ServicesLanding />
            <ServicesAbout />
            <ServicesProducts />
            <ServicesSponsors />
            <ServicesSocial />
            <ServicesFooter />
        </Wrapper>
    )
}

export default ServicesPage
