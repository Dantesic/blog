import React from 'react'
import { Wrapper, NewsletterWrapper, Form, Button } from './styles'

import addToMailchimp from 'gatsby-plugin-mailchimp'

const Newsletter = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email } = e.target.elements
        const result = await addToMailchimp(email.value, {NAME: name.value})
    }

    return (
        <Wrapper>
            <h1>Find joy in the happiness of the world that has not yet been born.</h1>
            <NewsletterWrapper>
                <h2>Newsletter</h2>
                <p>Subscribe and receive directly to your inbox materials that will enhance your personal and professional life.</p>
                <Form autoComplete="off" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your name" name="name" id="name" required />
                    <input type="text" placeholder="Your e-mail address" name="mail" id="email" required />
                    <Button type="submit">Subscribe</Button>
                </Form>
            </NewsletterWrapper>
        </Wrapper>
    )
}

export default Newsletter
