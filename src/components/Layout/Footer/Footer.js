import React from 'react'
import { Wrapper, ArrowSVG, Navbar, ButtonLink, Form, FormButton, AntesicSVG, Social, SocialMedia, Linkedin, Youtube, Twitter, Instagram, Email } from './styles'

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useLocation } from '@reach/router';

import addToMailchimp from 'gatsby-plugin-mailchimp'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../../utils/fontawesome"

const Footer = () => {
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email } = e.target.elements
        const result = await addToMailchimp(email.value)
        alert (`Welcome to our community!`);
        window.location.reload();
    }

    return (
        <Wrapper>
            <ArrowSVG>
                <Link to={location.pathname}>
                    <StaticImage
                        src="../../../assets/images/arrow-up.png"
                        alt="arrow pointing up"
                        loading="eager"
                        placeholder="blurred"
                        layout="constrained"
                    />
                </Link>
            </ArrowSVG>
            <Navbar>
                <Link to="/">. home</Link>
                <Link to="/about">. about</Link>
                <Link to="/learn">. learn</Link>
                <Link to="/e-letters">. e-letters</Link>
                <Link to="/media">. media</Link>
                <Link to="/contact">. contact</Link>
                <ButtonLink>
                    <Link to="/services">Services</Link>
                </ButtonLink>  
            </Navbar>
            <AntesicSVG>
                <Link to="/">
                    <StaticImage
                        src="../../../assets/images/logo.png"
                        alt="Antesic Logo"
                        loading="eager"
                        placeholder="blurred"
                        layout="constrained"
                        style={{ height: '10em', width: '10em' }}
                    />
                </Link>
            </AntesicSVG>
            <Form autoComplete="off" onSubmit={handleSubmit}>
                <h4>E-letters community</h4>
                <input type="text" placeholder="Your best e-mail address" name="mail" required />
                <FormButton type="submit">Subscribe</FormButton>
            </Form>
            <Social>
                <SocialMedia>
                    <h6>Follow me</h6>
                    <Linkedin>
                        <a
                            href="https://www.linkedin.com/in/dorianantesic/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon size={'2x'} icon={["fab", "linkedin-in"]} />
                        </a>
                    </Linkedin>
                    <Youtube>
                        <a
                            href="https://www.youtube.com/channel/UCptUiwBhO4MfBPiVolHEgkw"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon size={'2x'} icon={["fab", "youtube"]} />
                        </a>
                    </Youtube>
                    <Twitter>
                        <a
                            href="https://twitter.com/dorianantesic"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon size={'2x'} icon={["fab", "twitter"]} />
                        </a>
                    </Twitter>
                    <Instagram>
                        <a
                            href="https://www.instagram.com/dorian.antesic/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon size={'2x'} icon={["fab", "instagram"]} />
                        </a>
                    </Instagram>
                </SocialMedia>
                <Email>
                    <h6>Contact me</h6>
                    <p>
                        <a href="https://antesic.dorian@gmail.com">antesic.dorian@gmail.com</a>
                    </p>
                </Email>
            </Social>
        </Wrapper>
    )
}

export default Footer
