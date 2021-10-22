import React from 'react'
import { Header, HamburgerMenu, Navbar, ButtonLink } from './styles'
import './styles.css'

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../../../utils/fontawesome'

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Header>
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
            <HamburgerMenu
                onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
                <FontAwesomeIcon
                    icon="bars"
                    size={'2x'}
                />
            </HamburgerMenu>
            <Navbar className={`${isOpen ? `active` : `hidden`}`}>
                <Link to="/" onClick={() => setIsOpen((isOpen) => !isOpen)}>. home</Link>
                <Link to="/about" onClick={() => setIsOpen((isOpen) => !isOpen)}>. about</Link>
                <Link to="/blog" onClick={() => setIsOpen((isOpen) => !isOpen)}>. blog</Link>
                <Link to="/newsletter" onClick={() => setIsOpen((isOpen) => !isOpen)}>. newsletter</Link>
                <Link to="/media" onClick={() => setIsOpen((isOpen) => !isOpen)}>. media</Link>
                <Link to="/contact" onClick={() => setIsOpen((isOpen) => !isOpen)}>. contact</Link>
                <ButtonLink>
                    <Link to="/podcast" onClick={() => setIsOpen((isOpen) => !isOpen)}>Pričajmo o novcu</Link>
                </ButtonLink>
            </Navbar>
        </Header>
    )
}

export default MobileNav
