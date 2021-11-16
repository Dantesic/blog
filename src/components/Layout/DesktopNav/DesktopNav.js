import React, { useState, useEffect } from 'react'
import { Header, HeightDiv, NavbarLeft, NavbarRight, NavbarMiddle, BlueLink } from './styles'

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const DesktopNav = () => {

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
            <HeightDiv scrolled={scrolled}/>
        </>
    )
}

export default DesktopNav
