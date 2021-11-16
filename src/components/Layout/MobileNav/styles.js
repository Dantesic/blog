import styled from 'styled-components'

export const Header = styled.header`
    display: none;
    background-color: #001A35;
    font-size: 0.8em;
    z-index: 5;

    @media (max-width: 1023px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ${({ scrolled }) => scrolled && `
        position: fixed;
        width: 100%;
    `}
`

export const HamburgerMenu = styled.div`
    position: absolute;
    top: 2em;
    right: 2.2em;
    font-size: 1.1em;
`

export const Navbar = styled.nav`
    a {
        color: #FFFFFF;
        text-decoration: none;
    }
`

export const ButtonLink = styled.div`

`

export const HeightDiv = styled.div`
    display: none;
    height: 4.5em;

    @media (min-width: 1023px) {
        display: none !important;
    }

    ${({ scrolled }) => scrolled && `
        display: block;
    `}
`