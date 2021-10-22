import React from 'react'
import { Wrapper } from './styles'

const MediaLink = ({ label, link, text }) => {
    return (
        <Wrapper>
            <a href={link}
                target="_blank"
                rel="noopener noreferrer"
            >{label}&nbsp;</a>
            <p>{text}</p>
        </Wrapper>
    )
}

export default MediaLink
