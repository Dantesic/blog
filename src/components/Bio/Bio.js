import React from 'react'
import { Button } from '../../styles/global'
import { Wrapper, Buttons } from './styles'

import { Link } from "gatsby"

import { Link as ScrollLink } from "react-scroll"

const Bio = () => {
    return (
        <Wrapper>
            <h1>Dorian Antešić</h1>
            <p>An entrepreneurial spirit with low time preference focused on studying <span>finance, economics & philosophy</span> to build <span>family wealth</span> and create a <span>better future</span> for generations to come.</p>
            <Buttons>
                <Button>
                    <ScrollLink to="about-me-section" spy={true} smooth={true}>Learn More</ScrollLink>
                </Button>
                <Button><Link to="/podcast">Pričajmo o novcu</Link></Button>
            </Buttons>
        </Wrapper>
    )
}

export default Bio
