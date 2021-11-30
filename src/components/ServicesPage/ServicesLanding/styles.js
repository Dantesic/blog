import styled from 'styled-components'

export const Wrapper = styled.section`
    background-color: #001A35;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 3em;
        text-align: center;
        margin-bottom: 0.6em;

        span {
            color: #55C0E0;
        }
    }

    p {
        font-size: 1.25rem;
        text-align: center;
        margin-bottom: 2.5em;
    }

    @media (max-width: 1330px) {
        h1 {
            font-size: 2.8em;
        }
    }

    @media (max-width: 1220px) {
        h1 {
            font-size: 2.4em; 
        }
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 1.8em;
        }
    }
`

export const ArrowSVG = styled.div`
    margin-top: 7em;
    width: 4em;

    :hover {
        cursor: pointer;
    }
`