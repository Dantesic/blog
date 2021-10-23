import React from 'react'
import { Wrapper, Form, Button } from './styles'

import addToMailchimp from 'gatsby-plugin-mailchimp'

const BlogPage = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email } = e.target.elements
        const result = await addToMailchimp(email.value, {NAME: name.value})
    }

    return (
        <Wrapper>
            <h2>Focused on creating <span>Family Wealth.</span></h2>
            <p>
                Once in a while, I will send you an email covering topics of <strong>finance, economics, philosophy</strong> and <strong>fitness.</strong> My aim is to create a <strong>strong human</strong> and through that - <strong>Family Wealth.</strong>
            </p>
            <p>
                This is also my journey. Join me and let’s create a community that will strive to create wealth that will last for generations.
            </p>
            <p>
                I write this newsletter to help clear my thoughts. I only write when I have something to say, so <strong>don’t expect spam.</strong>
            </p>
            <Form onSubmit={handleSubmit}>
                <label>
                    <strong>What should I call you?</strong>
                    <input type="text" name="name" placeholder="Your name" id="name" required/>
                </label>
                <label>
                    <strong>Where should I send the Newsletter?</strong>
                    <input type="email" name="email" placeholder="Your e-mail address" id="email" required/>
                </label>
                <Button type="submit" value="Subscribe" />
            </Form>
        </Wrapper>
    )
}

export default BlogPage