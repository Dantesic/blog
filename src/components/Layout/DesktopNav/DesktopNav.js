import React from 'react'
import { Header, NavbarLeft, NavbarRight, NavbarMiddle, BlueLink } from './styles'

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const DesktopNav = () => {
    return (
        <Header>
            <NavbarLeft>
                <Link to="/about">. about</Link>
                <Link to="/blog">. blog</Link>
                <Link to="/media">. media</Link>
                <Link to="/contact">. contact</Link>
            </NavbarLeft>
            <NavbarMiddle>
                <Link to="/">
                    <StaticImage
                        src="../../../assets/images/logo.png"
                        alt="Antesic Logo"
                        loading="eager"
                        placeholder="blurred"
                        layout="constrained"
                        style={{ width: '6em'}}
                    />
                </Link>
            </NavbarMiddle>
            <NavbarRight>
                <Link to="/newsletter">
                    <BlueLink>Newsletter</BlueLink>
                </Link>
                <Link to="/podcast">
                    <BlueLink>Pričajmo o novcu</BlueLink>
                </Link>
            </NavbarRight>
        </Header>
    )
}

export default DesktopNav
