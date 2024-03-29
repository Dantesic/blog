import React from 'react'
import { Wrapper, Text } from './styles'

import { StaticImage } from "gatsby-plugin-image"

import { Element as ScrollElement } from "react-scroll"

const AboutMe = () => {
    return (
        <ScrollElement>
            <Wrapper name="about-me-section">
                <Text>
                    <h2>About Me</h2>
                    <p>Economist, Investor & Consultant.</p>

                    <p>I am interested in the well-being of <strong>individuals</strong> and their <strong>families</strong>.</p>

                    <p>Focused on building <strong>Family Wealth</strong>.</p>

                    <div>
                        <p>My main fields of interest and research are:</p>
                        <p>▸Digital Assets Ecosystem (e.g. bitcoin)</p>
                        <p>▸The concept of Family Wealth</p>
                        <p>▸Philosophy (mainly Stoicism)</p>
                    </div>
                </Text>
                <StaticImage
                    src="../../assets/images/dorian-hrvatska-pamet-hrvatskoj.jpeg"
                    alt="Dorian Antesic award ceremony"
                    loading="eager"
                    placeholder="blurred"
                    layout="constrained"
                    style={{flexBasis: '60%'}}
                />
            </Wrapper>
        </ScrollElement>
    )
}

export default AboutMe
