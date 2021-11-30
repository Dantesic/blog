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

    @media (max-width: 500px) {
        br {
            display: none;
        }

        padding: 0 2em;
    }

    @media (max-width: 420px) {
        padding: 0 2em;

        h1 {
            font-size: 2.5em;
        }
    }

    @media (max-width: 360px) {
        h1 {
            font-size: 2.2em;
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