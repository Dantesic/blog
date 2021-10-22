import React from 'react'
import { Wrapper, Header, Content } from './styles'


const ExperienceField = ({ title, location, firm, duration, items }) => {

    return (
        <Wrapper>
            <Header>
                <h6>{title}</h6>
                <span>{location}</span>
                <span><strong>{firm}</strong></span>
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

export default ExperienceField
