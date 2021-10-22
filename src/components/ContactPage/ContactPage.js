import React from 'react'
import {Wrapper, Text, LastParagraph, Form, Button } from './styles'

const ContactPage = () => {
    return (
        <Wrapper>
            <Text>
                <h3>. contact</h3>
                <h4>Dorian Antešić</h4>
                <p>Tel. +385 95 524 7883</p>
                <p>Email: antesic.dorian@gmail.com</p>
                <LastParagraph>Follow me on <a href="https://www.linkedin.com/in/dorianantesic/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://www.facebook.com/Pri%C4%8Dajmo-o-novcu-103037651540688" target="_blank" rel="noopener noreferrer">YouTube</a></LastParagraph>
            </Text>
            <Form name="Contact Form" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="Contact Form" />
                <h4>Send a question or business proposal</h4>
                <input type="text" placeholder="Your name" name="name" required />
                <input type="email" placeholder="Your E-mail" name="mail" required />
                <textarea name="message" placeholder="Your Message" rows="5" />
                <Button type="submit" value="Submit" />
            </Form>
        </Wrapper>
    )
}

export default ContactPage
