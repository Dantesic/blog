import React from 'react'
import { Wrapper, Sponsors, Social, Linkedin, Youtube, Twitter, Instagram, Contact, Button } from './styles'

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../utils/fontawesome"

const PodcastFooter = () => {
    return (
        <Wrapper>
            <h2>Sponzori podcasta</h2>
            <Sponsors>
                <StaticImage
                        src="../../assets/images/rijeka-faculty.png"
                        alt="Dorian Antesic profile"
                        loading="eager"
                        placeholder="blurred"
                        layout="constrained"
                    />
                <StaticImage
                        src="../../assets/images/stud-centar.jpg"
                        alt="Dorian Antesic profile"
                        loading="eager"
                        placeholder="blurred"
                        layout="constrained"
                    />
                <StaticImage
                        src="../../assets/images/SZSUR-2.png"
                        alt="Dorian Antesic profile"
                        loading="eager"
                        placeholder="blurred"
                        layout="constrained"
                    />
            </Sponsors>
            <Social>
                <h2>Pratite podcast na društvenim mrežama</h2>
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
            </Social>
            <Contact>
                <h2>Želite se reklamirati na Pričajmo o novcu?</h2>
                <Button>
                    <Link to="/contact">Javite nam se!</Link>
                </Button>
            </Contact>
        </Wrapper>
    )
}

export default PodcastFooter
