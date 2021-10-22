import React from 'react'
import { Wrapper, SubscribeSection, H1, H1Span, Text, Form, Button, ImageSection } from './styles'

import { StaticImage } from "gatsby-plugin-image"

const Homepage = () => {
    return (
        <Wrapper>
            <SubscribeSection>
                <H1>Are you interested in <H1Span>Finance, Economics & Philosophy?</H1Span></H1>
                <Text>Subscribe Now and receive directly to your inbox materials that will enhance your personal and professional life.</Text>
                <Text>Yes, it’s completely <span>free.</span></Text>
                <Form>
                    <input type="text" placeholder="Your name" name="name" required />
                    <input type="text" placeholder="Your e-mail address" name="mail" required />
                    <Button type="submit" value="Subscribe" />
                </Form>
            </SubscribeSection>
            <ImageSection>
                <StaticImage
                    src="../../assets/images/naslovna.png"
                    alt="Dorian Antesic profile"
                    loading="eager"
                    placeholder="blurred"
                    layout="constrained"
                />
            </ImageSection>
        </Wrapper>
    )
}

export default Homepage
