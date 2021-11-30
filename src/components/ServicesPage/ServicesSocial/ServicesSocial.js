import React from 'react'
import { Wrapper, Linkedin, Youtube, Twitter, Instagram } from './styles'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../../utils/fontawesome"

const ServicesSocial = () => {
    return (
        <Wrapper>
            <h2>Follow me on social media</h2>
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
                        href="https://www.youtube.com/channel/UCptUiwBhO4MfBPiVolHEgkw"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon size={'2x'} icon={["fab", "twitter"]} />
                    </a>
            </Twitter>
            <Instagram>
                    <a
                        href="https://www.youtube.com/channel/UCptUiwBhO4MfBPiVolHEgkw"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon size={'2x'} icon={["fab", "instagram"]} />
                    </a>
            </Instagram>
        </Wrapper>
    )
}

export default ServicesSocial
