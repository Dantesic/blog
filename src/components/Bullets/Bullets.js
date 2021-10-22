import React from 'react'
import { Wrapper, Bullet, IconWrapper } from './styles'

import { StaticImage } from "gatsby-plugin-image"

const Bullets = () => {
    return (
        <Wrapper>
            <Bullet>
                <IconWrapper>
                    <StaticImage
                        src="../../assets/images/icon-1.png"
                        alt="Dorian Antesic profile"
                        loading="eager"
                        placeholder="blurred"
                        layout="constrained"
                    />
                </IconWrapper>
                <h3>Finance, Economics & Philosophy</h3>
                <p>Educate yourself to find ways for a more prosperous life.</p>
            </Bullet>
            <Bullet>
                <IconWrapper>
                    <StaticImage
                        src="../../assets/images/icon-2.png"
                        alt="Dorian Antesic profile"
                        loading="eager"
                        placeholder="blurred"
                        layout="constrained"
                    />
                </IconWrapper>
                <h3>Low time preference</h3>
                <p>Delay gratification and put more priority on the needs of the future.</p>
            </Bullet>
            <Bullet>
                <IconWrapper>
                    <StaticImage
                        src="../../assets/images/icon-3.png"
                        alt="Dorian Antesic profile"
                        loading="eager"
                        placeholder="blurred"
                        layout="constrained"
                    />
                </IconWrapper>
                <h3>Family wealth</h3>
                <p>Build family wealth that will secure a good life for many generations to come.</p>
            </Bullet>
        </Wrapper>
    )
}

export default Bullets
