import React from 'react'
import { Wrapper, ArrowSVG } from './styles'
import { Button } from '../../../styles/global'

import { StaticImage } from "gatsby-plugin-image"
import { Link as ScrollLink } from "react-scroll"

const ServicesLanding = () => {
    return (
        <Wrapper>
            <h1>Transition from<br/> <span>fiat to bitcoin<br/> standard</span></h1>
            <p>If you want to learn how to plug into to the new<br/> monetary system, benefit from it and build a<br/> better future for you family, let’s talk.</p>
            <Button><ScrollLink to="services-about-section" spy={true} smooth={true}>Show More</ScrollLink></Button>
            <ScrollLink to="services-about-section" spy={true} smooth={true}>
                <ArrowSVG>
                    <StaticImage
                        src="../../assets/images/arrow-down.png"
                        alt="arrow pointing up"
                        loading="eager"
                        placeholder="blurred"
                        layout="constrained"
                    />
                </ArrowSVG>
            </ScrollLink>
        </Wrapper>
    )
}

export default ServicesLanding
