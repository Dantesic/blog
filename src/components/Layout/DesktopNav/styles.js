import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    display: none;
    height: 6em;
    justify-content: space-between;
    align-items: center;
    padding: 3.5em 8em;
    background-color: #001A35;
    z-index: 5;

    @media (min-width: 1024px) {
        display: flex;
    }

    @media (min-width: 1600px) {
        padding: 3.5em 12em;
    }

    @media (max-width: 1300px) {
        padding: 3.5em 4em;
    }

    ${({ scrolled }) => scrolled && `
        position: fixed;
    `}
`
export const HeightDiv = styled.div`
    background-color: #001A35;
    height: 6em;
    display: none;

    ${({ scrolled }) => scrolled && `
        display: block;

        @media (max-width: 1024px) {
            display: none;
        }
    `}
`

export const NavbarLeft = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 1em;

    a {
        font-size: 1.1em;
        color: #FFFFFF;
        margin-left: 1em;
        padding: 0 0.6em;
        padding-bottom: 0.1em;
        border-bottom: 3px solid transparent;
    }

    a:hover {
        border-bottom: 3px solid #55C0E0;
    }
`

export const NavbarRight = styled.nav`
    display: flex;
`

export const NavbarMiddle = styled.nav`
    margin-right: 9.5em;
    font-size: 1.1em;
`

export const BlueLink = styled.div`
    background: #55C0E0;
    color: #FFFFFF;
    border-radius: 0.8rem;
    padding: 0.7rem 1rem;
    margin-left: 1.2em;

    :hover {
        background-color: #FFFFFF;
        color: #55C0E0;
        cursor: pointer;

        a {
            border-bottom: none;
            color: #55C0E0;
        }
    }
`