import React, { useState, useEffect } from 'react'
import { Header, HamburgerMenu, Navbar, ButtonLink, HeightDiv } from './styles'
import './styles.css'

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../../../utils/fontawesome'

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);
    const [scrollY, setScrollY] = useState(null);

    const handleScroll=() => {
        const offset = window.scrollY;
        if(offset < scrollY ){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
        setScrollY(window.scrollY);
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    return (
        <>
            <Header scrolled={scrolled}>
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
                <Navbar className={`${isOpen ? `nav-active` : `nav-hidden`}`}>
                    <Link to="/" onClick={() => setIsOpen((isOpen) => !isOpen)}>. home</Link>
                    <Link to="/about" onClick={() => setIsOpen((isOpen) => !isOpen)}>. about</Link>
                    <Link to="/learn" onClick={() => setIsOpen((isOpen) => !isOpen)}>. learn</Link>
                    <Link to="/media" onClick={() => setIsOpen((isOpen) => !isOpen)}>. media</Link>
                    <Link to="/contact" onClick={() => setIsOpen((isOpen) => !isOpen)}>. contact</Link>
                    <ButtonLink>
                        <Link to="/newsletter" onClick={() => setIsOpen((isOpen) => !isOpen)}>E-letters</Link>
                    </ButtonLink>
                    <ButtonLink>
                        <Link to="/services" onClick={() => setIsOpen((isOpen) => !isOpen)}>Services</Link>
                    </ButtonLink>
                </Navbar>
            </Header>
            <HeightDiv scrolled={scrolled}/>
        </>
    )
}

export default MobileNav
