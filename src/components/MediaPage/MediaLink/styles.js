import styled from 'styled-components'

export const Wrapper = styled.section`
    margin-bottom: 1em;
    font-size: 1.25rem;

    a {
        color: #55C0E0;
        white-space: nowrap;
    }

    p {
        color: rgb(0, 26, 53);
        display: inline;
    }

    @media (max-width: 1100px) {
        margin-bottom: 1.5em;
    }

    @media (max-width: 550px) {
        text-align: center;
    }

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`