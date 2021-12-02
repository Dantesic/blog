import React from 'react'
import { Wrapper, Sponsors, IconWrapper } from './styles'

import { StaticImage } from "gatsby-plugin-image"

const ServicesSponsors = () => {
    return (
        <Wrapper>
            <h2>I am working with</h2>
            <Sponsors>
                <IconWrapper>
                    <StaticImage
                        src="../../../assets/images/saifedean-ammous.png"
                        alt="Saifedean Ammous logo"
                        loading="eager"
                        placeholder="blurred"
                        layout="constrained"
                    />
                </IconWrapper>
                <IconWrapper>
                    <StaticImage
                        src="../../../assets/images/sovereign-man.png"
                        alt="Sovereign man logo"
                        loading="eager"
                        placeholder="blurred"
                        layout="constrained"
                    />
                </IconWrapper>
            </Sponsors>
        </Wrapper>
    )
}

export default ServicesSponsors
