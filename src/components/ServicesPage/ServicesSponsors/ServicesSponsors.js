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
                        src="../../../assets/images/uniri.png"
                        alt="Dorian Antesic profile"
                        loading="eager"
                        placeholder="blurred"
                        layout="constrained"
                    />
                </IconWrapper>
                <IconWrapper>
                    <StaticImage
                        src="../../../assets/images/uniri.png"
                        alt="Dorian Antesic profile"
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
