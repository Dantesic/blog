import React from 'react'
import { Wrapper } from './styles'

import { Element as ScrollElement } from "react-scroll"

const ServicesAbout = () => {
    return (
        <ScrollElement name="services-about-section">
            <Wrapper>
                <h2>Economist, Investor & Consultant</h2>
                <p>I am interested in the well-being of individuals and their families.</p>
                <p>I am putting money where my mouth is.</p>
                <p>I invest in what I recommend; I practice what I preach; and I live<br /> with my goal.</p>
            </Wrapper>
        </ScrollElement>
    )
}

export default ServicesAbout
