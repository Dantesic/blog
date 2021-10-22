import styled from 'styled-components'

export const Wrapper = styled.section`
    background-color: #F3F3F3;
    padding: 2em;
    color: #001A35;
    border-left: 4px solid #55C0E0;
    border-bottom: 4px solid #55C0E0;
`

export const Header = styled.section`
    display: flex;
    flex-direction: column;

    h6 {
        color: #55C0E0;
        text-transform: uppercase;
        font-size: 1.1em;
    }

    span {
        font-size: 1em;
        margin-top: 0.1em;
    }
`

export const Location = styled.span`
    
`

export const Content = styled.ul`
    margin-top: 1em;

    li {
        margin-bottom: 0.5em;
    }
`