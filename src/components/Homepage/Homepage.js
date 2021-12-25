import React from 'react'
import { Wrapper, SubscribeSection, H1, H1Span, Text, Form, Button, ImageSection } from './styles'

import { StaticImage } from "gatsby-plugin-image"

import addToMailchimp from 'gatsby-plugin-mailchimp'

const Homepage = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email } = e.target.elements
        const result = await addToMailchimp(email.value)
        alert (`Welcome to our community!`);
        window.location.reload();
    }

    return (
        <Wrapper>
            <SubscribeSection>
                <H1>Are you interested in <H1Span>Finance, Economics & Philosophy?</H1Span></H1>
                <Text>Bitcoin, stoicism, bodybuilding, investing & economics.<br/> Yes, all of it!</Text>
                <Text>I research and write about topics that will build you into a strong human and help you build Family Wealth.</Text>
                <Text>Subscribe, it's completely <span>FREE.</span></Text>
                <Form autoComplete="off" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your best e-mail address" name="mail" required />
                    <Button type="submit">Subscribe</Button>
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
