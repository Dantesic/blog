import React from 'react'
import { Wrapper, BulletWrapper, Bullet, IconWrapper, TitleWrapper } from './styles'
import { Button } from '../../../styles/global'

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const ServicesProducts = () => {
    return (
        <Wrapper>
            <h2>Let me help you</h2>
            <BulletWrapper>
                <Bullet>
                    <IconWrapper>
                        <StaticImage
                            src="../../../assets/images/bitcoin-icon.png"
                            alt="Bitcoin icon"
                            loading="eager"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </IconWrapper>
                    <TitleWrapper>
                        <h3>Bitcoin consulting</h3>
                    </TitleWrapper>
                    <p>1-on-1 online education and consultation that will teach you about bitcoin, its philosophy, how bitcoin works, how to buy it and secure it.</p>
                    <Button><Link to="/contact">Contact</Link></Button>
                </Bullet>
                <Bullet>
                    <IconWrapper>
                        <StaticImage
                            src="../../../assets/images/assistant-icon.png"
                            alt="Assistant icon"
                            loading="eager"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </IconWrapper>
                    <TitleWrapper>
                        <h3>Virtual Assistant</h3>
                    </TitleWrapper>
                    <p>Let me help you run your business. If you need an extra hand for a project or business advice, I can be of service.</p>
                    <Button><Link to="/contact">Contact</Link></Button>
                </Bullet>
                <Bullet>
                    <IconWrapper>
                        <StaticImage
                            src="../../../assets/images/e-letter-icon.png"
                            alt="E-letter icon"
                            loading="eager"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </IconWrapper>
                    <TitleWrapper>
                        <h3>E-letters</h3>
                    </TitleWrapper>
                    <p>Are you interested in building wealth that will last for generations? I write personal e-letters about finance, economics & philosophy that I send directly to your email inbox.</p>
                    <Button><Link to="/newsletter">Subscribe</Link></Button>
                </Bullet>
            </BulletWrapper>
        </Wrapper>
    )
}

export default ServicesProducts
