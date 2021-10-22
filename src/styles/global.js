import styled from 'styled-components'

export const Button = styled.div`
    color: #FFFFFF;
    background: #55C0E0;
    border-radius: 0.8rem !important;
    padding: 0.7rem 1rem !important;
    margin-left: 1em;

    a {
        color: #FFFFFF;
    }

    :hover {
        background-color: #FFFFFF;
        cursor: pointer;
        box-shadow: 0 0 0 3px #55C0E0 inset;
        color: #55C0E0;

        a {
            color: #55C0E0;
        }
    }
`