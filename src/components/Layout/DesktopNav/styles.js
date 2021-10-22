import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    display: none;
    height: 6em;
    justify-content: space-between;
    align-items: center;
    padding: 3.5em 8em;
    background-color: #001A35;

    @media (min-width: 1024px) {
        display: flex;
    }

    @media (min-width: 1600px) {
        padding: 3.5em 12em;
    }

    @media (max-width: 1300px) {
        padding: 3.5em 4em;
    }
`
export const NavbarLeft = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 1em;

    a {
        font-size: 1.1em;
        color: #FFFFFF;
        margin-left: 0.8em;
        padding: 0 0.6em;
        padding-bottom: 0.1em;
        font-weight: normal;
        border-bottom: 3px solid transparent;
    }

    a:hover {
        border-bottom: 3px solid #55C0E0;
    }

    a:last-child {
        margin-left: 0;
    }
`

export const NavbarRight = styled.nav`
    display: flex;
`

export const NavbarMiddle = styled.nav`
    margin-right: 4em;
    font-size: 1.1em;
`

export const BlueLink = styled.div`
    background: #55C0E0;
    font-weight: normal;
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