import React from 'react'
import { Wrapper, Form, Button } from './styles'

import addToMailchimp from 'gatsby-plugin-mailchimp'

const BlogPage = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email } = e.target.elements
        const result = await addToMailchimp(email.value)
        alert (`Welcome to our community!`);
        window.location.reload();
    }

    return (
        <Wrapper>
            <h2>Focused on building <br/><span>Family Wealth.</span></h2>
            <p>
                Once in a while, I will send you an email covering topics of <strong>finance, economics, philosophy</strong> and <strong>fitness.</strong> My aim is to build a <strong>strong human</strong> and through that - <strong>Family Wealth.</strong>
            </p>
            <p>
                This is also my journey. Join me and let’s create a community that will strive to build wealth that will last for generations.
            </p>
            <p>
                I write these e-letters to help clear my thoughts. I only write when I have something to say, so <strong>don’t expect spam.</strong>
            </p>
            <Form autoComplete="off" onSubmit={handleSubmit}>
                <label>
                    <strong>Where should I send the E-letters?</strong>
                    <input type="email" name="email" placeholder="Your best e-mail address" id="email" required/>
                </label>
                <Button type="submit">Subscribe</Button>
            </Form>
        </Wrapper>
    )
}

export default BlogPage