import styled from 'styled-components'
import { device } from '../../styles/mediaQuery'

export const Wrapper = styled.section`
    display: flex;
    background-color: #FFFFFF;
    justify-content: center;
    align-items: center;
    margin: 10rem 9rem;

    @media (max-width: 1100px) {
        display: grid;
        grid-template-areas:
        "photo"
        "text";
        margin: 8rem 9rem;

        :last-child {
            grid-area: photo;
            width: 100%;
        }
    }

    @media (max-width: 850px) {
        margin: 7rem 5rem;
    }

    @media (max-width: 600px) {
        margin: 5em 2em;
        font-size: 0.9em;
    }
`

export const Text = styled.section`
    display: flex;
    flex-basis: 40%;
    flex-direction: column;
    align-self: stretch;
    row-gap: 2em;
    grid-area: text;

    h2 {
        color: #001A35;
        font-size: 2.2em;
        margin-bottom: 1.5em;
    }

    p {
        color: rgb(0, 26, 53);
        font-size: 1.2em;
        padding-right: 4em;
    }

    span {
        color: rgb(0, 26, 53);
        font-size: 1.2em;
        margin-bottom: 0;
    }

    @media (max-width: 1400px) {
        h2 {
            margin-bottom: 1em;
        }

        p {
            font-size: 1.1em;
        }
    }

    @media (max-width: 1300px) {
        p {
            font-size: 1em;
        }
    }

    @media (max-width: 1100px) {
        text-align: center;

        h2 {
            margin-top: 2em;
            text-align: center;
        }

        p {
            padding-right: 0;
            font-size: 1.2em;
        }
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 2em;
        }
    }

    @media ${device.mobileL} {
        h2 {
            text-align: center;
            margin-top: 1.75em;
            margin-bottom: 0.75em;
        }

        p {
            padding: 0;
            font-size: 1.1em;
        }
    }
`