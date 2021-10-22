import React from 'react'
import { Wrapper, ImgWrapper, Header, Content } from './styles'

import { GatsbyImage } from "gatsby-plugin-image"

const EducationField = ({ image, imageAlt, title, subtitle, duration, items }) => {

    return (
        <Wrapper>
            <ImgWrapper>
                <GatsbyImage image={image} alt={imageAlt} />
            </ImgWrapper>
            <Header>
                <h6>{title}</h6>
                <h6>{subtitle}</h6>
                <span>{duration}</span>
            </Header>
            <Content>
                {items.map((text, id) => (
                    <li key={id}>{text}</li>
                ))}
            </Content>
        </Wrapper>
    )
}

export default EducationField
