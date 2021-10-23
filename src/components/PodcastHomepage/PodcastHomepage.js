import React from 'react'
import { Wrapper, SubscribeSection, FormShortcut, FormButton, H1, Text, Form, Button, ImageSection } from './styles'

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import addToMailchimp from 'gatsby-plugin-mailchimp'

const PodcastHomepage = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email } = e.target.elements
        const result = await addToMailchimp(email.value, {NAME: name.value})
    }

    return (
        <Wrapper>
            <SubscribeSection>
                <FormShortcut>
                    <p>Želite se reklamirati na Pričajmo o novcu?</p>
                    <p>Kliknite na sljedeću formu</p>
                    <Link to="/contact">
                        <FormButton>Forma</FormButton>
                    </Link>
                </FormShortcut>
                <H1>Pričajmo o novcu</H1>
                <Text>
                    Saznajte o čemu razmišljaju stručnjaci iz područja financija i ekonomije. Pretplati se na besplatni email newsletter i primaj direktno na svoju email adresu članke vezane za financije, ekonomiju i životnu filozofiju.
                </Text>
                <Form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Vaše ime" name="name" id="name" required />
                    <input type="text" placeholder="Vaša e-mail adresa" name="mail" id="email" required />
                    <Button type="submit" value="Pretplati se" />
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

export default PodcastHomepage
