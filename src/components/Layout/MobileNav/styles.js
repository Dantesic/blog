import styled from 'styled-components'

export const Header = styled.header`
    display: none;
    background-color: #001A35;
    font-size: 0.8em;

    @media (max-width: 1023px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
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