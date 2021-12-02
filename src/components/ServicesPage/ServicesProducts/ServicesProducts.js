import React from 'react'
import { Wrapper, BulletWrapper, Bullet, IconWrapper } from './styles'
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
                    <h3>Consultations on Bitcoin and Digital Assets</h3>
                    <p>1-on-1 online education and consultation that will teach you about bitcoin and digital assets, their philosophy, how they work, how to buy and secure them. </p>
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
                    <h3>Virtual Assistant</h3>
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
                    <h3>Free E-letter</h3>
                    <p>Are you interested in building wealth that will last for generations? I write personal e-letters about finance, economics & philosophy that I send directly to your email inbox.</p>
                    <Button><Link to="/newsletter">Subscribe</Link></Button>
                </Bullet>
            </BulletWrapper>
        </Wrapper>
    )
}

export default ServicesProducts
