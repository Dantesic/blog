import React from 'react'
import { Wrapper, ArrowSVG, Navbar, ButtonLink, Form, FormButton, AntesicSVG, Social, SocialMedia, Linkedin, Youtube, Email } from './styles'

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useLocation } from '@reach/router';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../../utils/fontawesome"

const Footer = () => {
    const location = useLocation();

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
                <Link to="/blog">. blog</Link>
                <Link to="/newsletter">. newsletter</Link>
                <Link to="/media">. media</Link>
                <Link to="/contact">. contact</Link>
                <ButtonLink>
                    <Link to="/podcast">Pričajmo o novcu</Link>
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
            <Form autoComplete="off">
                <h4>Join my newsletter</h4>
                <input type="text" placeholder="Your name" name="name" required />
                <input type="text" placeholder="Your e-mail address" name="mail" required />
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
